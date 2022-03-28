import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import {routes} from './routes';
import {bottom} from '../screens/bottom';

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
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name={routes.TRENDSCREENS}
        component={bottom.TRENDSCREENS}
        options={{tabBarLabel: 'Search'}}
      />

      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
        options={{tabBarLabel: 'Notification'}}
      />
      <Tab.Screen
        name={routes.MESSAGESCREENS}
        component={bottom.MESSAGESCREENS}
        options={{tabBarLabel: 'Message'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
