# NFL Betting Platform - Frontend

A modern, dark-themed NFL betting platform built with Next.js 14, TypeScript, and Shadcn UI.

## 🎨 Design Features

- **Dark Theme**: Sleek dark mode design inspired by modern sportsbooks
- **Responsive**: Mobile-first design that works on all devices
- **Real-time Updates**: Live game scores with automatic refreshing
- **Interactive Betting**: Dynamic bet slip with live odds updates
- **Professional UI**: Built with Shadcn UI components

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── providers.tsx      # React Query & theme providers
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Main navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── games/             # Game display components
│   │   └── GameCard.tsx   # Game card with scores/odds
│   ├── betting/           # Betting components
│   │   ├── BetSlip.tsx    # Bet slip sheet
│   │   ├── BetSlipItem.tsx
│   │   └── OddsButton.tsx # Odds selection button
│   └── ui/                # Shadcn UI components
├── lib/
│   ├── api/               # API client functions
│   │   ├── client.ts      # Axios instance
│   │   ├── games.ts       # Games API
│   │   ├── teams.ts       # Teams API
│   │   ├── odds.ts        # Odds API
│   │   └── auth.ts        # Auth API
│   └── mock/              # Mock data for development
│       ├── games.mock.ts
│       ├── teams.mock.ts
│       └── odds.mock.ts
├── hooks/                 # Custom React hooks
│   ├── useGames.ts
│   ├── useTeams.ts
│   └── useOdds.ts
├── store/                 # Zustand stores
│   ├── authStore.ts       # Authentication state
│   ├── betSlipStore.ts    # Bet slip state
│   └── uiStore.ts         # UI state (theme, etc.)
└── types/                 # TypeScript types
    ├── game.types.ts
    ├── bet.types.ts
    ├── wallet.types.ts
    ├── auth.types.ts
    ├── admin.types.ts
    └── index.ts
```

## 🎯 Features Implemented

### ✅ Core Features

- [x] Dark theme design system
- [x] Responsive layout with Header & Footer
- [x] TypeScript types for all entities
- [x] Mock data layer for development
- [x] API client with mock data toggle
- [x] State management (Auth, Bet Slip, UI)
- [x] React Query for data fetching

### ✅ Components Built

- [x] Header with navigation
- [x] Footer with links
- [x] Game Card with live scores
- [x] Odds Button for betting
- [x] Bet Slip (floating sheet)
- [x] Bet Slip Item with stake input

### ✅ Pages Created

- [x] Home page with live/upcoming games
- [ ] Live Scores page
- [ ] Fixtures page
- [ ] Teams page
- [ ] Team Detail page
- [ ] Game Detail page
- [ ] Standings page
- [ ] Betting page
- [ ] My Bets page
- [ ] Wallet page
- [ ] Transactions page
- [ ] Profile page
- [ ] Login page
- [ ] Register page
- [ ] Email Verification page

## 🚦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. **Navigate to the frontend directory**:
   ```bash
   cd BETTING/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   Create `.env.local` with:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   NEXT_PUBLIC_USE_MOCK_DATA=true
   NEXT_PUBLIC_APP_NAME=NFL Betting Platform
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Color Scheme

The dark theme uses a professional color palette:

- **Background**: Very dark (`oklch(0.08 0 0)`)
- **Card**: Slightly lighter (`oklch(0.15 0 0)`)
- **Primary**: Blue/purple accent (`oklch(0.6 0.2 265)`)
- **Success**: Green for positive odds (`oklch(0.65 0.2 150)`)
- **Destructive**: Red for negative odds (`oklch(0.6 0.22 25)`)

## 🔧 Development Mode

The app is configured to use mock data by default. Set `NEXT_PUBLIC_USE_MOCK_DATA=true` in `.env.local` to use mock data instead of real API calls.

### Mock Data Includes:

- **32 NFL Teams**: All teams with logos from ESPN
- **17 Games**: Mix of live, upcoming, and finished games
- **Odds**: Moneyline, spread, and over/under odds
- **Mock Users**: Test users for authentication

## 📱 Responsive Design

The platform is fully responsive:

- **Mobile**: Hamburger menu, stacked layouts
- **Tablet**: Optimized grid layouts
- **Desktop**: Full navigation, multi-column layouts

## 🎮 Interactive Features

### Bet Slip

- Click odds to add to bet slip
- Floating sheet opens automatically
- Enter stake amounts
- Quick stake buttons ($10, $25, $50, $100)
- Real-time payout calculations
- Remove individual bets or clear all

### Live Updates

- Live game scores refresh every 30 seconds
- Odds update every minute
- Smooth transitions and animations

## 🔐 Authentication Flow (To Be Implemented)

1. User registers with email
2. Receives 6-digit verification code
3. Verifies email
4. Can place bets and manage wallet

## 🎯 Next Steps

To complete the platform, implement:

1. **Authentication Pages** (Login, Register, Verify Email)
2. **User Pages** (Scores, Fixtures, Teams, Betting, My Bets, Wallet)
3. **Admin Dashboard** (Manage games, odds, users, bets)
4. **Backend API** (Connect to real NFL data and betting system)
5. **Payment Integration** (Stripe, crypto, etc.)
6. **Testing** (Unit tests, E2E tests)

## 📚 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🤝 Contributing

When adding new features:

1. Create TypeScript types first
2. Add mock data if needed
3. Create API functions
4. Build React Query hooks
5. Create components
6. Add pages

## 📄 License

This is a demonstration project for educational purposes.

## ⚠️ Disclaimer

This is a development project. Actual sports betting requires proper licensing and regulatory compliance. Please gamble responsibly.

---

**Built with ❤️ using Next.js, TypeScript, and Shadcn UI**
