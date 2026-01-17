# Deployment Guide

This guide will walk you through deploying the SPILL Landing Page to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Google Cloud project with Sheets API enabled (see `ENV_SETUP.md`)

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. Make sure all your code is committed:
```bash
git add .
git commit -m "Prepare for deployment"
```

2. Push to your remote repository:
```bash
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js settings
5. Configure environment variables (see step 3)
6. Click "Deploy"

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Link to existing project or create new
   - Set up and develop? **No** (for production)
   - Override settings? **No**

5. For production deployment:
```bash
vercel --prod
```

### 3. Configure Environment Variables

**Important**: You must add environment variables in Vercel for the waitlist to work.

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables:

   | Variable Name | Value | Environment |
   |--------------|-------|-------------|
   | `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Your service account email | All (Production, Preview, Development) |
   | `GOOGLE_PRIVATE_KEY` | Your private key (with `\n` characters) | All |
   | `GOOGLE_SHEET_ID` | Your Google Sheet ID | All |

4. **Important for `GOOGLE_PRIVATE_KEY`**:
   - Copy the entire private key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - Keep all `\n` characters
   - Wrap in quotes if needed: `"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"`

5. Click **Save** for each variable
6. Redeploy your application for changes to take effect

### 4. Verify Deployment

1. Visit your deployment URL (provided by Vercel)
2. Test the waitlist form:
   - Click "Join Waitlist" button
   - Fill in the form
   - Submit
   - Check your Google Sheet to confirm the entry was added

### 5. Custom Domain (Optional)

1. Go to **Settings** > **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Post-Deployment Checklist

- [ ] Environment variables are set in Vercel
- [ ] Waitlist form is functional
- [ ] Google Sheet is receiving submissions
- [ ] All pages load correctly
- [ ] Mobile responsiveness works
- [ ] Analytics are set up (if applicable)

## Troubleshooting

### Waitlist Not Working

1. **Check environment variables**: Ensure all three variables are set in Vercel
2. **Check Google Sheet permissions**: Make sure the service account email has Editor access
3. **Check API logs**: Go to Vercel dashboard > Functions > View logs
4. **Verify Google Sheets API**: Ensure it's enabled in Google Cloud Console

### Build Errors

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (should be 20+)

### Environment Variables Not Working

1. Make sure variables are added for the correct environment (Production/Preview/Development)
2. Redeploy after adding variables
3. Check that `GOOGLE_PRIVATE_KEY` includes `\n` characters

## Continuous Deployment

Vercel automatically deploys when you push to your main branch. For other branches, preview deployments are created automatically.

To disable auto-deployment:
1. Go to **Settings** > **Git**
2. Configure deployment settings as needed

## Monitoring

- **Logs**: View function logs in Vercel dashboard under **Functions**
- **Analytics**: Enable Vercel Analytics in project settings
- **Performance**: Monitor Core Web Vitals in the dashboard

## Rollback

If you need to rollback to a previous deployment:

1. Go to **Deployments** tab
2. Find the deployment you want to restore
3. Click the three dots menu
4. Select **Promote to Production**
