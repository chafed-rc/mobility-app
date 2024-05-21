// StatusCard.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatusCardProps {
  title: string;
  value: string;
  valueColor?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value, valueColor = '#00bfa5' }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StatusCard;
