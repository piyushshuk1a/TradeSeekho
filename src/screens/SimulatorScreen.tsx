import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Alert,
  Dimensions,
  Platform,
} from 'react-native';
import { Button, Slider, Card } from 'react-native-paper';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';

// Conditionally import SVG for web compatibility
let Svg: any, Polyline: any, Circle: any;
if (Platform.OS !== 'web') {
  const SvgModule = require('react-native-svg');
  Svg = SvgModule.default;
  Polyline = SvgModule.Polyline;
  Circle = SvgModule.Circle;
}

const { width } = Dimensions.get('window');

export const SimulatorScreen: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);
  const [timeTravel, setTimeTravel] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(4200);

  // Generate dummy price data for the chart
  const generateChartData = () => {
    const days = 7;
    const data = [];
    for (let i = 0; i <= days; i++) {
      data.push({
        x: (i / days) * (width - 60),
        y: 200 - (Math.random() * 100 - 50), // Random price variation
      });
    }
    return data;
  };

  const chartData = generateChartData();

  const handleHedge = () => {
    const lockedPrice = currentPrice;
    const finalPrice = currentPrice + (Math.random() * 400 - 200);
    const profit = lockedPrice - finalPrice;

    if (profit > 0) {
      Alert.alert(
        '🎉 Win!',
        `You hedged at ₹${lockedPrice.toFixed(2)}\nFinal price: ₹${finalPrice.toFixed(2)}\nProfit: ₹${profit.toFixed(2)}`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert(
        '📉 Loss',
        `You hedged at ₹${lockedPrice.toFixed(2)}\nFinal price: ₹${finalPrice.toFixed(2)}\nLoss: ₹${Math.abs(profit).toFixed(2)}`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleWait = () => {
    const finalPrice = currentPrice + (Math.random() * 600 - 300);
    const change = finalPrice - currentPrice;

    if (change > 0) {
      Alert.alert(
        '🎉 Win!',
        `You waited and the price went up!\nFinal price: ₹${finalPrice.toFixed(2)}\nGain: ₹${change.toFixed(2)}`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert(
        '📉 Loss',
        `You waited and the price dropped!\nFinal price: ₹${finalPrice.toFixed(2)}\nLoss: ₹${Math.abs(change).toFixed(2)}`,
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          🎮 Hedging Simulator
        </Text>

        {/* Price Chart */}
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>Price Trend (Soybean)</Text>
            <View style={styles.chartContainer}>
              {/* TODO: Replace with actual chart library (e.g., react-native-chart-kit, victory-native) 
                  or connect to Python ML backend for real price predictions */}
              {Platform.OS === 'web' ? (
                <View style={styles.chartPlaceholder}>
                  <Text style={styles.chartPlaceholderText}>
                    📈 Price Chart
                  </Text>
                  <Text style={styles.chartPlaceholderSubtext}>
                    Trend: Upward ↗️
                  </Text>
                </View>
              ) : (
                Svg && (
                  <Svg height="200" width={width - 60}>
                    <Polyline
                      points={chartData
                        .map((point) => `${point.x},${point.y}`)
                        .join(' ')}
                      fill="none"
                      stroke={theme.colors.primary}
                      strokeWidth="2"
                    />
                    {chartData.map((point, index) => (
                      <Circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill={theme.colors.primary}
                      />
                    ))}
                  </Svg>
                )
              )}
              <Text style={styles.chartNote}>
                Current Price: ₹{currentPrice.toFixed(2)}
              </Text>
            </View>
          </Card.Content>
        </Card>

        {/* Time Travel Slider */}
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>⏰ Time Travel</Text>
            <Text style={styles.sliderLabel}>
              Fast Forward: {timeTravel} days
            </Text>
            <Slider
              value={timeTravel}
              onValueChange={setTimeTravel}
              minimumValue={0}
              maximumValue={7}
              step={1}
              style={styles.slider}
              thumbColor={theme.colors.primary}
              minimumTrackTintColor={theme.colors.primary}
            />
            <Text style={styles.sliderNote}>
              Simulate price changes over time
            </Text>
          </Card.Content>
        </Card>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <Button
            mode="contained"
            onPress={handleHedge}
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.primary },
            ]}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
          >
            🔒 Hedge (Lock Price)
          </Button>

          <Button
            mode="contained"
            onPress={handleWait}
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.accent },
            ]}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
          >
            ⏳ Wait (Risk It)
          </Button>
        </View>

        {/* Instructions */}
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={styles.cardTitle}>📖 How to Play</Text>
            <Text style={styles.instructionText}>
              1. Observe the price trend{'\n'}
              2. Use the slider to simulate time{'\n'}
              3. Choose to hedge (lock current price) or wait{'\n'}
              4. Learn from the results!
            </Text>
            <Text style={styles.backendNote}>
              {/* TODO: Connect to Python ML backend for realistic price predictions */}
              Note: Currently using dummy data. Connect ML model for accurate
              predictions.
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
  chartContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  chartPlaceholder: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  chartPlaceholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chartPlaceholderSubtext: {
    fontSize: 16,
    color: '#666',
  },
  chartNote: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  slider: {
    marginVertical: 16,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  sliderNote: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 4,
  },
  actionsContainer: {
    marginVertical: 20,
  },
  actionButton: {
    marginVertical: 8,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  backendNote: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 12,
  },
});

