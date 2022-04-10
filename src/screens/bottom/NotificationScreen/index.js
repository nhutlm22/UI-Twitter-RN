import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {colors, fonts} from '../../../theme';
import TabBar from '../../../components/TabBar';
import {icons} from '../../../assets';
import NotificationCard from '../../../components/cards/NotificationCard';
import {HOME_DATA, NOTIFICATION_DATA} from '../../../assets/data';
import HomeCard from '../../../components/cards/HomeCard';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTopTab from './CustomTopTab';
import {other} from '../../other';

const ALL = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={NOTIFICATION_DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => <NotificationCard item={item} />}
    />
  );
};

const MENTIONS = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={HOME_DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => <HomeCard item={item} />}
    />
  );
};

const Notification = ({title1}) => {
  const [isCheck, setCheck] = useState(false);
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Header avatar title={'Notification'} setting />
      {/* 
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={NOTIFICATION_DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => <NotificationCard item={item} />}
          />
        </ScrollView> */}

      <Tab.Navigator
        lazy={true}
        optimizationsEnabled={true}
        tabBar={props => <CustomTopTab {...props} />}>
        <Tab.Screen name="All" component={ALL} />
        <Tab.Screen name="Mentions" component={MENTIONS} />
      </Tab.Navigator>
    </View>
  );
};

export default Notification;
