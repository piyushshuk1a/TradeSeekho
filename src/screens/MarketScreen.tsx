import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { Card, List } from 'react-native-paper';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface CropData {
  id: string;
  name: string;
  currentPrice: number;
  change: number; // positive for up, negative for down
  changePercent: number;
}

// Dummy market data
// TODO: Replace with real API call to Python ML backend
const dummyCropData: CropData[] = [
  {
    id: '1',
    name: 'Soybean',
    currentPrice: 4200,
    change: 105,
    changePercent: 2.5,
  },
  {
    id: '2',
    name: 'Mustard',
    currentPrice: 5800,
    change: -70,
    changePercent: -1.2,
  },
  {
    id: '3',
    name: 'Chana',
    currentPrice: 6100,
    change: 48,
    changePercent: 0.8,
  },
  {
    id: '4',
    name: 'Wheat',
    currentPrice: 2200,
    change: 30,
    changePercent: 1.4,
  },
  {
    id: '5',
    name: 'Rice',
    currentPrice: 3500,
    change: -25,
    changePercent: -0.7,
  },
  {
    id: '6',
    name: 'Cotton',
    currentPrice: 6800,
    change: 120,
    changePercent: 1.8,
  },
];

export const MarketScreen: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);

  const renderCropItem = ({ item }: { item: CropData }) => {
    const isUp = item.change > 0;
    const iconName = isUp ? 'trending-up' : 'trending-down';
    const changeColor = isUp ? '#2E7D32' : '#D32F2F';

    return (
      <Card
        style={[styles.cropCard, { backgroundColor: theme.colors.surface }]}
      >
        <Card.Content>
          <View style={styles.cropRow}>
            <View style={styles.cropInfo}>
              <Text style={[styles.cropName, { color: theme.colors.primary }]}>
                {item.name}
              </Text>
              <Text style={styles.cropPrice}>
                ₹{item.currentPrice.toLocaleString()}/MT
              </Text>
            </View>
            <View style={styles.trendContainer}>
              <MaterialCommunityIcons
                name={iconName}
                size={32}
                color={changeColor}
              />
              <Text style={[styles.changeText, { color: changeColor }]}>
                {isUp ? '+' : ''}
                {item.changePercent.toFixed(2)}%
              </Text>
            </View>
          </View>
          <Text style={styles.changeAmount}>
            {isUp ? '+' : ''}₹{item.change.toFixed(2)} ({isUp ? '↑' : '↓'})
          </Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          📊 Market Rates
        </Text>
        <Text style={styles.subtitle}>
          {/* TODO: Connect to Python ML backend for real-time market data */}
          Live crop prices and predictions
        </Text>
      </View>

      <FlatList
        data={dummyCropData}
        renderItem={renderCropItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  cropCard: {
    marginBottom: 12,
    elevation: 2,
  },
  cropRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cropPrice: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  trendContainer: {
    alignItems: 'center',
    marginLeft: 16,
  },
  changeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  changeAmount: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

