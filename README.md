# TradeSeekho - Dual Mode Trading & Learning App

A React Native Expo application that switches between an Educational Simulator ("Seekho") and a Real Trading Platform ("Vyapaar").

## Features

- **Dual Mode Architecture**: Seamlessly switch between simulation and real trading modes
- **Gamified Learning**: Interactive hedging simulator with time travel mechanics
- **Real Trading Dashboard**: Professional interface for managing forward contracts
- **Market Rates**: Live crop prices with prediction trends
- **Learning Center**: Educational content about hedging and forward contracts

## Tech Stack

- **Framework**: React Native (Expo) with TypeScript
- **UI Library**: React Native Paper (Material Design)
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **Icons**: MaterialCommunityIcons

## Project Structure

```
TradeSeekho/
├── src/
│   ├── context/
│   │   └── ModeContext.tsx       # Global mode state management
│   ├── constants/
│   │   └── theme.ts               # Seekho & Vyapaar themes
│   ├── components/
│   │   └── ModeToggle.tsx         # Mode switching component
│   ├── screens/
│   │   ├── HomeScreen.tsx         # Dual mode dashboard
│   │   ├── SimulatorScreen.tsx    # Hedging game
│   │   ├── MarketScreen.tsx       # Crop prices list
│   │   ├── LearningScreen.tsx     # Educational content
│   │   └── ProfileScreen.tsx      # User profile
│   └── navigation/
│       └── AppNavigator.tsx        # Bottom tab navigation
├── App.tsx                         # Entry point
├── package.json
└── tsconfig.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npm start
```

3. Run on your preferred platform:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your device

## Backend Integration Points

The app includes TODO comments marking where to connect the Python ML backend:

1. **HomeScreen.tsx**: 
   - Live Mandi Rates API endpoint
   - Active Contracts API endpoint

2. **SimulatorScreen.tsx**:
   - Price prediction ML model
   - Historical price data API

3. **MarketScreen.tsx**:
   - Real-time market data API
   - ML prediction endpoints

4. **LearningScreen.tsx**:
   - ML model insights and accuracy metrics

## Themes

- **Seekho Theme** (Simulation): Green (#2E7D32) primary, Orange (#E65100) accent
- **Vyapaar Theme** (Real Trading): Blue (#1565C0) primary, Light Blue (#0288D1) accent

## Development Notes

- All screens use dummy data for immediate rendering
- Navigation dynamically updates theme colors based on active mode
- Mode toggle is available on Home and Profile screens
- Chart visualization uses react-native-svg (can be replaced with a chart library)

## License

MIT

