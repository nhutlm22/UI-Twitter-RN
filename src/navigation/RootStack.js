import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { routes } from './routes';
import { colors } from '../theme';
import { bottom } from '../screens/bottom';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Stack.Navigator
        initialRouteName={routes.BOTTOMTABBAR}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.HOMESCREENS}
          component={bottom.HOMESCREENS}
        />
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
