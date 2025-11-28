import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useMode } from '../context/ModeContext';
import { getTheme } from '../constants/theme';

export const ModeToggle: React.FC = () => {
  const { isSimulationMode, toggleMode } = useMode();
  const theme = getTheme(isSimulationMode);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          { backgroundColor: theme.colors.background },
        ]}
        onPress={toggleMode}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.slider,
            isSimulationMode ? styles.sliderLeft : styles.sliderRight,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <Text style={[styles.sliderText, { color: '#FFFFFF' }]}>
            {isSimulationMode ? 'SEEKHO' : 'VYAAPAAR'}
          </Text>
        </View>
        <View style={styles.labelsContainer}>
          <Text
            style={[
              styles.label,
              isSimulationMode && styles.labelActive,
              { color: isSimulationMode ? theme.colors.primary : '#666' },
            ]}
          >
            Seekho (Sim)
          </Text>
          <Text
            style={[
              styles.label,
              !isSimulationMode && styles.labelActive,
              { color: !isSimulationMode ? theme.colors.primary : '#666' },
            ]}
          >
            Vyapaar (Real)
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  toggleContainer: {
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  slider: {
    position: 'absolute',
    height: 52,
    width: '48%',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  sliderLeft: {
    left: 4,
  },
  sliderRight: {
    right: 4,
  },
  sliderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 0,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  labelActive: {
    fontWeight: 'bold',
  },
});

