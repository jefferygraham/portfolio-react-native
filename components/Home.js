import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeNavigator} />
      <Drawer.Screen name='Dashboard' component={DashboardNavigator} />
    </Drawer.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Login} />
    </Stack.Navigator>
  );
}

function DashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Dashboard' component={Dashboard} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return <MainNavigator />;
}
