import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {routes} from './routes';
import {colors} from '../theme';
import {bottom} from '../screens/bottom';
import BottomTabNavigation from './BottomTabNavigation';
import {other} from '../screens/other';
import DrawerNavigation from './Drawer';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Stack.Navigator
        initialRouteName={routes.DRAWER}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.HOMESCREENS}
          component={bottom.HOMESCREENS}
        />
        <Stack.Screen
          name={routes.MESSAGESETTINGSCREENS}
          component={other.MESSAGESETTINGSCREENS}
        />
        <Stack.Screen
          name={routes.SEARCHSCREEN}
          component={other.SEARCHSCREEN}
        />
        <Stack.Screen
          name={routes.TWEETINGOFMINESCREEN}
          component={other.TWEETINGOFMINESCREEN}
        />
        <Stack.Screen
          name={routes.TWEETINGOFSOMEONESCREEN}
          component={other.TWEETINGOFSOMEONESCREEN}
        />
        <Stack.Screen
          name={routes.NEWMESSAGESCREEN}
          component={other.NEWMESSAGESCREEN}
        />
        <Stack.Screen
          name={routes.TWEETINGSCREEN}
          component={other.TWEETINGSCREEN}
        />
        <Stack.Screen
          name={routes.PROFILESCREEN}
          component={other.PROFILESCREEN}
        />
        <Stack.Screen
          name={routes.SETTINGSANDPRIVACY}
          component={other.SETTINGSANDPRIVACY}
        />
        <Stack.Screen
          name={routes.DRAWER}
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {routes} from './routes';
// import * as React from 'react';
// import {Animated, View, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';

// const Tab = createMaterialTopTabNavigator();

// const MyTabBar = ({state, descriptors, navigation, position}) => {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({name: route.name, merge: true});
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const inputRange = state.routes.map((_, i) => i);
//         const opacity = position.interpolate({
//           inputRange,
//           outputRange: inputRange.map(i => (i === index ? 1 : 0)),
//         });

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{flex: 1}}>
//             <Animated.Text style={{opacity}}>{label}</Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };
// const RootStack = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBar={props => <MyTabBar {...props} />}
//         screenOptions={{
//           tabBarLabelStyle: {fontSize: 12},
//           tabBarItemStyle: {width: 100},
//           tabBarStyle: {backgroundColor: 'powderblue'},
//         }}>
//         <Tab.Screen name={routes.HOMESCREENS} component={routes.HOMESCREENS} />
//         <Tab.Screen
//           name={routes.SETTINGSANDPRIVACY}
//           component={routes.SETTINGSANDPRIVACY}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootStack;
