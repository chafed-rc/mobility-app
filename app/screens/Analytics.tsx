// Analytics.tsx

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MobilityData, User, AnalyticsData } from '@/utils/types';
import Layout from '../layout';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  user: User;
  data: MobilityData;
  analytics: AnalyticsData;
}

const Analytics: React.FC<Props> = ({ user, data, analytics }) => {
  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };

  const handleSettingsPress = () => {
    console.log('Settings button pressed');
  };

  const [activeTab, setActiveTab] = React.useState('analytics');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout user={user} onMenuPress={handleMenuPress} onSettingsPress={handleSettingsPress}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'analytics' && styles.activeTab]}
          onPress={() => handleTabPress('analytics')}
        >
          <Icon name="walk-outline" size={18} color={activeTab === 'analytics' ? 'white' : '#231452'} />
          <Text style={[styles.tabText, activeTab === 'analytics' && styles.activeTabText]}>Gait Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'history' && styles.activeTab]}
          onPress={() => handleTabPress('history')}
        >
          <Icon name="time-outline" size={18} color={activeTab === 'history' ? 'white' : '#231452'} />
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>Gait History</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'analytics' ? (
        <>
          <View style={styles.sessionContainer}>
            <Text style={styles.sessionText}>Walk Session 6</Text>
            <View style={styles.dateContainer}>
              <TouchableOpacity>
                <Text style={styles.dateButton}>{'<'}</Text>
              </TouchableOpacity>
              <Text style={styles.dateText}>11:35 AM</Text>
              <TouchableOpacity>
                <Text style={styles.dateButton}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.metricContainer}>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{analytics.distance} ft</Text>
              <Text style={styles.metricLabel}>Distance</Text>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{analytics.time} min</Text>
              <Text style={styles.metricLabel}>Time</Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{analytics.cadence}%</Text>
                <Text style={styles.detailLabel}>Cadence</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{analytics.sway}%</Text>
                <Text style={styles.detailLabel}>Sway</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{analytics.swing}%</Text>
                <Text style={styles.detailLabel}>Swing</Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{analytics.extension} in.</Text>
                <Text style={styles.detailLabel}>Extension</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{analytics.pressure}%</Text>
                <Text style={styles.detailLabel}>Pressure</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{analytics.stance}%</Text>
                <Text style={styles.detailLabel}>Stance</Text>
              </View>
            </View>
          </View>

          <View style={styles.speedContainer}>
            <Text style={styles.speedLabel}>Walk Speed</Text>
            <Text style={styles.speedValue}>{analytics.walkSpeed} m/s</Text>
          </View>
        </>
      ) : (
        <View style={styles.historyContainer}>
          <Text>History Goes here</Text>
        </View>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    backgroundColor: '#eaeaea',
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: '#231452',
  },
  tabText: {
    fontSize: 16,
    color: '#231452',
    marginLeft: 5,
  },
  activeTabText: {
    color: 'white',
  },
  sessionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sessionText: {
    fontSize: 18,
    fontWeight: 'bold',
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
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  metricCard: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10a985',
  },
  metricLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  speedContainer: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  speedLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  speedValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10a985',
  },
  historyContainer: {
    paddingHorizontal: 20,
  },
});

export default Analytics;
