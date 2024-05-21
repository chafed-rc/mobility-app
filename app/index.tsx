// App.tsx

import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home'; // Adjust the path as necessary
import { AnalyticsData, MobilityData, User } from '@/utils/types';
import { RootStackParamList } from './navigation'; 
import Analytics from './screens/Analytics';

const Stack = createStackNavigator<RootStackParamList>();

const user: User = {
  name: 'Laura',
  date: 'Today 16 March 2023',
};

const data: MobilityData = {
  mobilityIndex: 72,
  strides: 288,
  change: 2,
  posture: 16,
  heartRate: 'Normal',
  oxygen: 'Normal',
  sleep: 'Normal',
  medication: 'Taken',
  activity: 'Normal',
  fallRisk: 'Low',
};

const analytics: AnalyticsData = {
  distance: 1306,
  time: 28,
  cadence: 90,
  sway: 11,
  swing: 48,
  extension: 19,
  pressure: 14,
  stance: 52,
  walkSpeed: 1.22,
};

const App: React.FC = () => {
  return (

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props) => <HomeScreen {...props} user={user} data={data} />}
        </Stack.Screen>
        <Stack.Screen name="Analytics" options={{headerShown: false}}>
          {(props) => <Analytics {...props} user={user} data={data} analytics={analytics} />}
        </Stack.Screen>
      </Stack.Navigator>

  );
};

export default App;
