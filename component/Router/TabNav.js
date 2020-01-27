import React from 'react';
import { TabNavigator } from 'react-navigation';
import Home from './../Home/Home';
import Profile from './../Profile/Profile';
import Soal from './../Soal/Soal'


  const createTab = ({ stack, label, badge }) => ({
    screen: stack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: label => (
        <TabBarIcon
          isActive={tintColor === '#FFF'}
          label={label}
          badge={badge}
          navigation={navigation}
        />
      )
    })
  });
  
  const navigatorConfig = {
    tabBarPosition: 'bottom',
    backBehavior: true,
    lazy: true,
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#696969',
      inactiveTintColor: '#FFF',
      style: {
        borderTopWidth: 0.5,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 60
      },
      labelStyle: {
        color: '#696969'
      },
      tabStyle: {},
      indicatorStyle: {
        backgroundColor: '#FFF'
      }
    }
  };

  const createTabNavigator = (tabDefinations = []) => {
    const tabs = tabDefinations.map(createTab);
    return new TabNavigator(tabs, navigatorConfig);
  };

  export const Main = createTabNavigator([
    {
      label: 'Home',
      stack: Home
    },
    {
      label: 'Soal',
      stack: Soal
      
    },
    {
      label: 'Profile',
      stack: Profile
    }
  ]);

  export default {Main}
  