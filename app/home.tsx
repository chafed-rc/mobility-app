// HomeScreen.tsx

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MobilityData, User } from '@/utils/types'; 
import Layout from './layout';
import Icon from 'react-native-vector-icons/Ionicons';
import MobilityIndex from '@/components/MobilityIndex'; 
import StatusCard from '@/components/StatusCard'; 

interface Props {
  user: User;
  data: MobilityData;
}

const HomeScreen: React.FC<Props> = ({ user, data }) => {
  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };

  const handleSettingsPress = () => {
    console.log('Settings button pressed');
  };

  const [activeTab, setActiveTab] = React.useState('mobility');

  return (
    <Layout user={user} onMenuPress={handleMenuPress} onSettingsPress={handleSettingsPress}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'mobility' && styles.activeTab]} 
          onPress={() => setActiveTab('mobility')}
        >
          <Icon name="walk-outline" size={18} color={activeTab === 'mobility' ? 'white' : '#231452'} />
          <Text style={[styles.tabText, activeTab === 'mobility' && styles.activeTabText]}>Dad's Mobility</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'history' && styles.activeTab]} 
          onPress={() => setActiveTab('history')}
        >
          <Icon name="time-outline" size={18} color={activeTab === 'history' ? 'white' : '#231452'} />
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>Dad's History</Text>
        </TouchableOpacity>
      </View>

      <MobilityIndex 
        index={data.mobilityIndex}
        strides={data.strides}
        change={data.change}
        posture={data.posture}
      />

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Icon name="heart-outline" size={24} color="white" />
          <Text style={styles.cardText}>Heart Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="cloud-outline" size={24} color="white" />
          <Text style={styles.cardText}>Oxygen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="bed-outline" size={24} color="white" />
          <Text style={styles.cardText}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="medkit-outline" size={24} color="white" />
          <Text style={styles.cardText}>Medication</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusContainer}>
        <StatusCard title="Activity" value={data.activity} />
        <StatusCard title="Fall Risk" value={data.fallRisk} />
      </View>

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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    padding: 12,
    backgroundColor: '#231452',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  statusContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 12,
  },


});

export default HomeScreen;
