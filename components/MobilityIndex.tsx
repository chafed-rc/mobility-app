// MobilityIndex.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MobilityIndexProps {
  index: number;
  strides: number;
  change: number;
  posture: number;
}

const MobilityIndex: React.FC<MobilityIndexProps> = ({ index, strides, change, posture }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobility Index</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${index}%` }]} />
      </View>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
        <Text style={styles.indexSubtext}>/100</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Strides: <Text style={styles.statValue}>{strides}</Text></Text>
        <Text style={styles.stat}>Change: <Text style={styles.statValue}>{change}</Text></Text>
        <Text style={styles.stat}>Posture: <Text style={styles.statValue}>{posture}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10a985',
  },
  indexContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  index: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#10a985',
  },
  indexSubtext: {
    fontSize: 18,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stat: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MobilityIndex;
