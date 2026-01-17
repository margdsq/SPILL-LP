# SPILL Landing Page

An elite, ultra-modern landing page for SPILL fintech.

## Features

- **Hero Section**: 3D iPhone mockup with interactive mood switch (Care vs Roast)
- **Social Dimension**: Friend feed, social badges, and custom tea alerts
- **Notification Stack**: Liquid Glass iOS-style notifications
- **Modular Dashboard**: Draggable Bento grid widgets
- **Smooth Scroll Animations**: Framer Motion powered reveal effects
- **Liquid Glass Aesthetics**: Backdrop blur with lavender and mint shadows
- **Waitlist Integration**: Google Sheets integration for waitlist signups

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- A Google Cloud account (for Google Sheets API)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SPILL-LP
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy the example environment file (see `ENV_SETUP.md` for detailed instructions)
   - Create a `.env.local` file with your Google Sheets API credentials

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Setup

See [ENV_SETUP.md](./ENV_SETUP.md) for detailed instructions on configuring Google Sheets API credentials.

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
4. Deploy!

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables when prompted or via Vercel dashboard

### Environment Variables for Vercel

Make sure to add these in your Vercel project settings:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY` (include the full key with `\n` characters)
- `GOOGLE_SHEET_ID`

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Draggable
- Google Sheets API

## Design System

- **Background**: Pure white (#FFFFFF)
- **Glass Effect**: Backdrop blur with soft lavender and mint shadows
- **Border Radius**: 32px for Bento cards
- **Typography**: Outfit / Inter
- **Animations**: Bouncy, smooth transitions

## Project Structure

```
SPILL-LP/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # API endpoint for waitlist signups
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── WaitlistModal.tsx         # Waitlist signup modal
│   └── ...                       # Other components
├── vercel.json                   # Vercel deployment configuration
└── ENV_SETUP.md                  # Environment variables setup guide
```


