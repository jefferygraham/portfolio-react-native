import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Answered from './Answered';
import Unanswered from './Unanswered';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

const Drawer = createDrawerNavigator();

function Sidebar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Dashboard' component={Dashboard} />
      <Drawer.Screen name='NewQuestion' component={NewQuestion} />
      <Drawer.Screen name='Leaderboard' component={Leaderboard} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Answered' component={Answered} />
      <Tab.Screen name='Unanswered' component={Unanswered} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Sidebar} />
    </Stack.Navigator>
  );
}
