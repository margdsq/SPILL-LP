/**
 * API route for waitlist signup
 * Handles form submissions and saves data to Google Sheets
 */

import { NextRequest, NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

// Initialize Google Sheets authentication
const getDoc = async () => {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID || '',
    serviceAccountAuth
  )

  await doc.loadInfo()
  return doc
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate input
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Get the spreadsheet
    const doc = await getDoc()
    const sheet = doc.sheetsByIndex[0] // Use first sheet

    // Load header row to get exact column names
    await sheet.loadHeaderRow()

    // Prepare row data - use exact header names from the sheet
    const rowData: Record<string, string> = {}
    
    // Map data to column headers (case-insensitive matching)
    const emailHeader = sheet.headerValues.find(h => h.toLowerCase() === 'email') || 'Email'
    const nameHeader = sheet.headerValues.find(h => h.toLowerCase() === 'name') || 'Name'
    const timestampHeader = sheet.headerValues.find(
      h => h.toLowerCase().includes('signed') || 
           h.toLowerCase().includes('date') || 
           h.toLowerCase().includes('time') ||
           h.toLowerCase() === 'signed up at'
    ) || 'Signed Up At'

    rowData[emailHeader] = email
    rowData[nameHeader] = name || ''
    rowData[timestampHeader] = new Date().toISOString()

    // Add row
    await sheet.addRow(rowData)

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to add to waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
