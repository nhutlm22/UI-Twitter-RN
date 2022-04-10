import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import {routes} from './routes';
import {bottom} from '../screens/bottom';
import CustomDrawerContent from './DrawerNavigation/CustomDrawerContent';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
      />
      <Tab.Screen
        name={routes.TRENDSCREENS}
        component={bottom.TRENDSCREENS}
      />

      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
      />
      <Tab.Screen
        name={routes.MESSAGESCREENS}
        component={bottom.MESSAGESCREENS}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;


