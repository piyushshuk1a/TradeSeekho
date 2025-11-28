import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';
import { ModeToggle } from '../components/ModeToggle';

export const ProfileScreen: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ModeToggle />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          👤 Profile
        </Text>

        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>Account Information</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name:</Text>
              <Text style={styles.infoValue}>Trader User</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>trader@tradeseekho.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Mode:</Text>
              <Text style={styles.infoValue}>
                {isSimulationMode ? 'Seekho (Simulation)' : 'Vyapaar (Real)'}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>Statistics</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {isSimulationMode ? '15' : '8'}
                </Text>
                <Text style={styles.statLabel}>
                  {isSimulationMode ? 'Simulations' : 'Contracts'}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {isSimulationMode ? '₹12,500' : '₹45,000'}
                </Text>
                <Text style={styles.statLabel}>
                  {isSimulationMode ? 'Virtual Profit' : 'Real Profit'}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Button
          mode="outlined"
          onPress={() => {
            // TODO: Implement logout functionality
            console.log('Logout');
          }}
          style={[styles.logoutButton, { borderColor: theme.colors.primary }]}
          labelStyle={{ color: theme.colors.primary }}
        >
          Logout
        </Button>
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
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  logoutButton: {
    marginTop: 20,
    marginBottom: 20,
  },
});

