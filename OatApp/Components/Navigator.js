import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen1 from '../page/Screen1.js';
import Screen2 from '../page/Screen2.js';
import Profile from '../page/ProfileScreen.js';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
                } 
                else if (route.name === 'Settings') {
                    iconName = focused
                    ? 'settings'
                    : 'settings-outline';
                }
                else if (route.name === 'Profile') {
                    iconName = focused
                    ? 'card'
                    : 'card-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            }}
        >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Settings" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}