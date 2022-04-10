import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {routes} from './routes';
import {bottom} from '../screens/bottom';
import {other} from '../screens/other';
import RootStack from './RootStack';
import BottomTabNavigation from './BottomTabNavigation';
import {colors} from '../theme';
import CustomDrawerContent from './DrawerNavigation/CustomDrawerContent';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={routes.BOTTOMTABBAR}
      drawerContent={props => <CustomDrawerContent {...props} />}

      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="Twitter of mine" component={other.TWEETINGOFMINESCREEN} />
      <Drawer.Screen name="Twitter of someone" component={other.TWEETINGOFSOMEONESCREEN} />
      <Drawer.Screen name="New Message" component={other.NEWMESSAGESCREEN} />
      <Drawer.Screen name="Profile" component={other.PROFILESCREEN} />
      <Drawer.Screen name="Tweeting" component={other.TWEETINGSCREEN} />
      <Drawer.Screen name="Settings and privacy" component={other.SETTINGSANDPRIVACY} />
      <Drawer.Screen name="Help Center" component={other.SEARCHSCREEN} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
