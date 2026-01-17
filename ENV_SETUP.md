# Environment Variables Setup

This document explains how to configure the environment variables needed for the Google Sheets integration.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id
```

## Setup Instructions

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2. Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 3. Generate Service Account Key

1. Click on the newly created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Download the JSON file

### 4. Extract Values from JSON

Open the downloaded JSON file and extract:

- **GOOGLE_SERVICE_ACCOUNT_EMAIL**: The `client_email` field
- **GOOGLE_PRIVATE_KEY**: The `private_key` field (keep the `\n` characters)
- **GOOGLE_SHEET_ID**: You'll get this from your Google Sheet URL

### 5. Create Google Sheet

1. Create a new Google Sheet
2. **Important**: Add headers in the first row (row 1):
   - Column A: `Email`
   - Column B: `Name`
   - Column C: `Signed Up At` (or `Date`, `Timestamp`, etc. - the code will find it automatically)
3. Make sure the headers are exactly in row 1
4. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - The `SHEET_ID` is the long string between `/d/` and `/edit`

### 6. Share Sheet with Service Account

1. In your Google Sheet, click "Share"
2. Add the service account email (the `client_email` from the JSON)
3. Give it "Editor" permissions
4. Click "Send"

### 7. Configure Environment Variables

#### For Local Development

Create a `.env.local` file in the project root:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour actual private key\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id
```

**Important**: Keep the `\n` characters in the private key. The value should be wrapped in quotes.

#### For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (paste the full private key with `\n` characters)
   - `GOOGLE_SHEET_ID`
4. Make sure to add them for all environments (Production, Preview, Development)

## Security Notes

- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`
- Keep your service account JSON file secure
- Rotate keys if they are ever exposed
