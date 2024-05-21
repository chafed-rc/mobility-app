// App.tsx

import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import { MobilityData, User } from '@/utils/types';

const Stack = createStackNavigator();

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

const App: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props) => <HomeScreen {...props} user={user} data={data} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
};

export default App;
