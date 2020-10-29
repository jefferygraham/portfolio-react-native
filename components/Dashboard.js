import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Answered from './Answered';
import Unanswered from './Unanswered';

const Tab = createBottomTabNavigator();

class Dashboard extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Answered' component={Answered} />
        <Tab.Screen name='Unanswered' component={Unanswered} />
      </Tab.Navigator>
    );
  }
}

export default Dashboard;
