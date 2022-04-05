// import React from 'react';
// import {Pressable, StyleSheet, Text, View} from 'react-native';
// import { colors, fonts } from '../../../theme';

// const CustomTopTab = ({state, descriptors, navigation, style}) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyCenter: 'center',
//         alignItems: 'center',
//         paddingVertical: 12,
//       }}>
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
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <Pressable
//             key={index}
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               ...style,
//             }}>
//             <Text style={styles.textStyle(isFocused)}>{label}</Text>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// };
// export default CustomTopTab;

// const styles = StyleSheet.create({
//     textStyle: isFocused => ({
//         color: isFocused ? colors.white : colors.black,
//         textAlign: 'center',
//         fontFamily: isFocused
//           ? fonts.sfProBlack
//           : fonts.sfProBlack,
//         fontSize: 14,
//       }),
//   });
