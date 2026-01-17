/**
 * API route for waitlist signup
 * Handles form submissions and saves data to Google Sheets
 */

import { NextRequest, NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

// Process private key - handle various formats from Vercel/env vars
function processPrivateKey(privateKey?: string): string {
  if (!privateKey) {
    throw new Error('GOOGLE_PRIVATE_KEY is not set')
  }

  // Remove surrounding quotes if present
  let processed = privateKey.trim()
  if ((processed.startsWith('"') && processed.endsWith('"')) ||
      (processed.startsWith("'") && processed.endsWith("'"))) {
    processed = processed.slice(1, -1)
  }

  // Replace escaped newlines with actual newlines
  // Handle both \\n (double escaped) and \n (single escaped)
  processed = processed.replace(/\\n/g, '\n')

  // Ensure we have proper BEGIN/END markers
  if (!processed.includes('BEGIN PRIVATE KEY') || !processed.includes('END PRIVATE KEY')) {
    throw new Error('Invalid private key format: missing BEGIN/END markers')
  }

  return processed
}

// Initialize Google Sheets authentication
const getDoc = async () => {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = processPrivateKey(process.env.GOOGLE_PRIVATE_KEY)
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!email) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL is not set')
  }

  if (!sheetId) {
    throw new Error('GOOGLE_SHEET_ID is not set')
  }

  const serviceAccountAuth = new JWT({
    email: email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth)

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
