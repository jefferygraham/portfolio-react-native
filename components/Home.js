import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Unanswered') {
            iconName = focused ? 'check-square' : 'check-square-o';
          } else if (route.name === 'Answered') {
            iconName = focused ? 'question-circle' : 'question-circle-o';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'red',
      }}
    >
      <Tab.Screen name='Unanswered' component={Unanswered} />
      <Tab.Screen name='Answered' component={Answered} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Would You Rather...' component={Login} />
      <Stack.Screen name='Home' component={Sidebar} />
    </Stack.Navigator>
  );
}
