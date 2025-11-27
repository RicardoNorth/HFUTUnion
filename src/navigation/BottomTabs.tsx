import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 55,
          backgroundColor: '#fff',
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#0058A2',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: '500',
          margin: 0,
          ...Platform.select({
            ios: {
              marginTop: -20,
            },
            android: {
              marginTop: -15,
            },
          }),
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        },
      }}
    >
      <Tab.Screen name="搜索" component={HomeScreen} />
      <Tab.Screen name="发现" component={DiscoverScreen} />
      <Tab.Screen name="我的" component={ProfileScreen} />
    </Tab.Navigator>
  );
}