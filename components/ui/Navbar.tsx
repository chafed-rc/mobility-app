// BottomNavbar.tsx

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavbar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="home-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="time-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="pulse-outline" size={24} color="#231452" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="calendar-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default BottomNavbar;
