import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../assets';
import {colors} from '../../../theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { routes } from '../../../navigation/routes';
import CustomTopTab from './CustomTopTab';
import { other } from '..';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate(routes.AUTHFORSCREEN);
  // };

  const Header = () => {
    return (
      <View style={styles.viewHeader}>
        <View style={styles.viewImageBack}>
          <Image
            source={icons.left_arrow_icon}
            style={styles.imageBack}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textHeader}>Profile</Text>
      </View>
    );
  };

  const Body = () => {
    return (
      <View style={styles.viewBody}>
        <View style={styles.bodyRow}>
          <View style={styles.viewImageAvatar}>
            <Image source={icons.avatar1} style={styles.imageAvatar} />
          </View>
          <TouchableOpacity style={styles.buttonEditProfile}>
            <Text style={styles.textEditProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Pixsellz</Text>
          <Text style={styles.textTag}>@pixsellz</Text>
        </View>
        <View style={styles.viewLink}>
          <Text style={styles.textContent}>
            Digital Goodies Team - Web and Mobile UI/UX development; Graphics;
            Illustrations
          </Text>
          <View style={styles.viewLinkRow}>
            <Image source={icons.link_icon} style={styles.imageLink} />
            <Text style={styles.textLink}>pixsellz.io</Text>
            <Image source={icons.calendar_icon} style={styles.imageLink} />
            <Text style={styles.textCalender}>Joined September 2018</Text>
          </View>
        </View>
        <View style={styles.viewFollow}>
          <Text style={styles.textFollowNumber}>
            217 <Text style={styles.textFollow}>Following</Text>
          </Text>
          <Text style={styles.textFollowNumber}>
            118 <Text style={styles.textFollow}>Followers</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgSB} />
      <Header />
      <Body />
      {/* <View style={{backgroundColor: colors.red}}>
        <Tab.Navigator
          // lazy={true}
          initialRouteName={routes.TWEETINGOFMINESCREEN}
          optimizationsEnabled={true}
          tabBar={props => <CustomTopTab {...props} />}>
          <Tab.Screen
            name={routes.TWEETINGOFMINESCREEN}
            component={other.TWEETINGOFMINESCREEN}
          />
          <Tab.Screen
            name={routes.TWEETINGOFSOMEONESCREEN}
            component={other.TWEETINGOFSOMEONESCREEN}
          />
        </Tab.Navigator>
      </View> */}
    </View>
  );
};

export default Profile;
