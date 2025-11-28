import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { MarketScreen } from '../screens/MarketScreen';
import { LearningScreen } from '../screens/LearningScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SimulatorScreen } from '../screens/SimulatorScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Home (to include SimulatorScreen)
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Simulator"
        component={SimulatorScreen}
        options={{
          title: 'Hedging Simulator',
          headerStyle: {
            backgroundColor: '#2E7D32',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: '#666',
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.primary,
            borderTopWidth: 2,
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Market"
          component={MarketScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-line"
                color={color}
                size={size}
              />
            ),
            title: 'Market Rates',
          }}
        />
        <Tab.Screen
          name="Learning"
          component={LearningScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open-variant"
                color={color}
                size={size}
              />
            ),
            title: 'Learning Center',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

