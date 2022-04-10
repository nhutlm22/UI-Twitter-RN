import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../theme';

const CustomTopTab = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.viewIsFocused(isFocused)}>
            <Text style={styles.textStyle(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default CustomTopTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  viewIsFocused: isFocused => ({
    borderBottomColor: isFocused ? colors.aqua : null,
    borderBottomWidth: isFocused ? 2 : null,
    paddingVertical: 12,
    flex: 1,
  }),
  textStyle: isFocused => ({
    color: isFocused ? colors.primary : colors.titleSearch,
    textAlign: 'center',
    fontFamily: fonts.sfProBlack,
    fontWeight: 'bold',
    fontSize: 16,
  }),
});
