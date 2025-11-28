import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';

export const LearningScreen: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          📚 Learning Center
        </Text>

        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>🎯 What is Hedging?</Text>
            <Text style={styles.lessonText}>
              Hedging is a risk management strategy used to protect against
              price fluctuations. By locking in a price today, you can protect
              yourself from future price volatility.
            </Text>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>📈 Forward Contracts</Text>
            <Text style={styles.lessonText}>
              A forward contract allows you to agree on a price today for a
              transaction that will happen in the future. This helps farmers and
              traders manage price risk.
            </Text>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>💡 Tips for Success</Text>
            <Text style={styles.lessonText}>
              • Monitor market trends regularly{'\n'}
              • Understand seasonal patterns{'\n'}
              • Use hedging to protect profits{'\n'}
              • Start with small contracts{'\n'}
              • Learn from each trade
            </Text>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>🔮 ML Predictions</Text>
            <Text style={styles.lessonText}>
              {/* TODO: Connect to Python ML backend to show prediction accuracy and model insights */}
              Our machine learning models analyze historical data, weather
              patterns, and market trends to provide price predictions. Use
              these insights to make informed hedging decisions.
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
  lessonText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
});

