import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../../assets';
import {colors, fonts} from '../../theme';
import styles from './styles';

const CustomDrawerContent = ({state, descriptors, navigation}) => {
  const Header = () => {
    return (
      <View style={styles.viewHeader}>
        <View style={styles.viewHeaderRow}>
          <View style={styles.viewHeaderImage}>
            <Image source={icons.avatar1} style={{height: 55, width: 55}} />
            <View style={styles.viewHeaderImageRow}>
              <View style={styles.viewNumber}>
                <Image source={icons.avatar2} style={{height: 32, width: 32}} />
                <View style={styles.viewNumberAbsolute}>
                  <Text style={styles.textNumber}>2</Text>
                </View>
              </View>
              <Image
                source={icons.menu_icon}
                style={{height: 32, width: 32, marginLeft: 8}}
              />
            </View>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>Pixsellz</Text>
            <Text style={styles.textTag}>@ayotunde</Text>
            <Text style={styles.textFollow}>
              <Text style={styles.textFollowBold}>216</Text> Following{' '}
              <Text style={styles.textFollowBold}>117</Text> Followers
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.viewFooter}>
        <View style={styles.viewFooterRow}>
          <Image
            resizeMode="contain"
            source={icons.light_icon}
            style={styles.imageFooter}
          />
          <Image
            resizeMode="contain"
            source={icons.qr_icon}
            style={styles.imageFooter}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />

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
            style={styles.viewIsFocused(isFocused, index)}>
            {/* <Image resizeMode='contain' source={source} style={styles.imageItem}/> */}
            <Text style={styles.textStyle(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}

      <Footer />
    </View>
  );
};
export default CustomDrawerContent;
