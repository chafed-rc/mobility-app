// HistoryScreen.tsx

import React from 'react';
import { StyleSheet, View } from 'react-native';
import HistoryGraph from '@/components/HistoryGraph';
import HistoryTrend from '@/components/HistoryTrend';
import { User } from '@/utils/types';


const HistoryScreen: React.FC = () => {
  return (
    <View>
      <HistoryGraph />
      <HistoryTrend title="Yesterday" value={70} trend="Trend Data" />
      <HistoryTrend title="Past Week" value={74} trend="Trend Data" />
      <HistoryTrend title="Past Month" value={71} trend="Trend Data" />
    </View>
  );
};



export default HistoryScreen;
