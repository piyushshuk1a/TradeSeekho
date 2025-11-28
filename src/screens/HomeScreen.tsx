import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';
import { ModeToggle } from '../components/ModeToggle';

export const HomeScreen: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);
  const navigation = useNavigation();

  // Seekho Mode - Gamified Dashboard
  if (isSimulationMode) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <ModeToggle />
        <View style={styles.content}>
          <Text style={[styles.title, { color: theme.colors.primary }]}>
            🎮 Gamified Dashboard
          </Text>

          {/* Wallet Balance Card */}
          <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
            <Card.Content>
              <Text style={styles.cardTitle}>💰 Wallet Balance</Text>
              <Text style={[styles.balance, { color: theme.colors.primary }]}>
                ₹1,00,000
              </Text>
              <Text style={styles.virtualLabel}>(Virtual)</Text>
            </Card.Content>
          </Card>

          {/* Start Hedging Simulator Button */}
          <Button
            mode="contained"
            onPress={() => {
              // @ts-ignore - Navigation type will be inferred from navigator
              navigation.navigate('Simulator');
            }}
            style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
          >
            🎯 Start Hedging Simulator
          </Button>

          {/* Daily Challenge Card */}
          <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
            <Card.Content>
              <Text style={styles.cardTitle}>🏆 Daily Challenge</Text>
              <Text style={styles.challengeText}>
                Complete 3 hedging strategies today to unlock the "Risk Master"
                badge!
              </Text>
              <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { backgroundColor: theme.colors.accent }]} />
                <Text style={styles.progressText}>1/3 Completed</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    );
  }

  // Vyapaar Mode - Professional Dashboard
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ModeToggle />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          📊 Professional Dashboard
        </Text>

        {/* Live Mandi Rates Ticker */}
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>📈 Live Mandi Rates</Text>
            <View style={styles.tickerContainer}>
              <Text style={styles.tickerItem}>
                Soybean: ₹4,200 ↑{' '}
                <Text style={styles.tickerChange}>(+2.5%)</Text>
              </Text>
              <Text style={styles.tickerItem}>
                Mustard: ₹5,800 ↓{' '}
                <Text style={[styles.tickerChange, { color: '#D32F2F' }]}>
                  (-1.2%)
                </Text>
              </Text>
              <Text style={styles.tickerItem}>
                Chana: ₹6,100 ↑{' '}
                <Text style={styles.tickerChange}>(+0.8%)</Text>
              </Text>
            </View>
            <Text style={styles.tickerNote}>
              {/* TODO: Connect to Python ML backend for real-time rates */}
              Last updated: {new Date().toLocaleTimeString()}
            </Text>
          </Card.Content>
        </Card>

        {/* Create Forward Contract Button */}
        <Button
          mode="contained"
          onPress={() => {
            // TODO: Navigate to contract creation screen
            console.log('Create Forward Contract');
          }}
          style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          ➕ Create Forward Contract
        </Button>

        {/* My Active Contracts */}
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>📋 My Active Contracts</Text>
            <View style={styles.contractsList}>
              <View style={styles.contractItem}>
                <Text style={styles.contractCrop}>Soybean</Text>
                <Text style={styles.contractDetails}>
                  Locked: ₹4,150 | Qty: 10 MT | Expiry: 15 days
                </Text>
              </View>
              <View style={styles.contractItem}>
                <Text style={styles.contractCrop}>Mustard</Text>
                <Text style={styles.contractDetails}>
                  Locked: ₹5,900 | Qty: 5 MT | Expiry: 30 days
                </Text>
              </View>
            </View>
            <Text style={styles.emptyNote}>
              {/* TODO: Connect to backend API to fetch real contracts */}
              No more active contracts
            </Text>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  virtualLabel: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  actionButton: {
    marginVertical: 16,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  challengeText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    width: '33%',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  tickerContainer: {
    marginVertical: 8,
  },
  tickerItem: {
    fontSize: 16,
    marginVertical: 4,
    fontWeight: '500',
  },
  tickerChange: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  tickerNote: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    fontStyle: 'italic',
  },
  contractsList: {
    marginTop: 8,
  },
  contractItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  contractCrop: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contractDetails: {
    fontSize: 14,
    color: '#666',
  },
  emptyNote: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 8,
    textAlign: 'center',
  },
});

