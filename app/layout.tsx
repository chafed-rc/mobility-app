// Layout.tsx

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/header'; 
import { User } from '@/utils/types'; 
import BottomNavbar from '@/components/Navbar';

interface LayoutProps {
  user: User;
  children: React.ReactNode;
  onMenuPress: () => void;
  onSettingsPress: () => void;
}

const Layout: React.FC<LayoutProps> = ({ user, children, onMenuPress, onSettingsPress }) => {
  return (
    <View style={styles.container}>
      <Header user={user} onMenuPress={onMenuPress} onSettingsPress={onSettingsPress} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default Layout;
