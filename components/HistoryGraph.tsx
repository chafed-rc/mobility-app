// HistoryGraph.tsx

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import {BarChart} from "react-native-chart-kit"

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ["|", "|", "8", "|", "12", "|", "16", "|", "18"],
  datasets: [
    {
      data: [50, 20, 40, 45, 60, 70, 80, 90, 48],
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const HistoryGraph: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today</Text>
        <View style={styles.dateContainer}>
          <TouchableOpacity>
            <Text style={styles.dateButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.date}>March <Text style={{fontWeight: 'bold', color: 'black'}}>16</Text></Text>
          <TouchableOpacity>
            <Text style={styles.dateButton}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.indexContainer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "baseline",
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    width: screenWidth - 40,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateButton: {
    fontSize: 18,
    color: '#888',
    marginHorizontal: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
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

});

export default HistoryGraph;
