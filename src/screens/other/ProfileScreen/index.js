import {
  FlatList,
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
import {routes} from '../../../navigation/routes';
import CustomTopTab from './CustomTopTab';
import {other} from '..';
import {useNavigation} from '@react-navigation/native';
import {
  HOME_DATA,
  MEMBEROF_DATA,
  NOTIFICATION_DATA,
} from '../../../assets/data';
import MemberOfCard from '../../../components/cards/MEMBEROFCARD';
import Button from '../../../components/Button';
import HomeCard from '../../../components/cards/HomeCard';
import NotificationCard from '../../../components/cards/NotificationCard';
import AddButton from '../../../components/AddButton';

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

  const SUBSCRIBED_TO = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={HOME_DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HomeCard item={item} />}
        />
      </View>
    );
  };

  const MEMBER_OF = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NOTIFICATION_DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NotificationCard item={item} />}
      />
    );
  };

  const MEDIA = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MEMBEROF_DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MemberOfCard item={item} />}
      />
    );
  };

  const LIKES = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={HOME_DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => <HomeCard item={item} />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgSB} />
      <Header />
      <Body />
      <Tab.Navigator
        lazy={true}
        optimizationsEnabled={true}
        tabBar={props => <CustomTopTab {...props} />}>
        <Tab.Screen name="Tweets" component={SUBSCRIBED_TO} />
        <Tab.Screen name="Tweets and replies" component={MEMBER_OF} />
        <Tab.Screen name="Media" component={MEDIA} />
        <Tab.Screen name="Likes" component={LIKES} />
      </Tab.Navigator>
      <AddButton />
    </View>
  );
};

export default Profile;
