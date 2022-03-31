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

const Notification = () => {
  const [isCheck, setCheck] = useState(false);

  const toggleCheck = () => {
    if (!isCheck) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Notification'} />
      <TabBar title1={'All'} title2={'Mentions'} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={NOTIFICATION_DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => <NotificationCard item={item} />}
          />
        </ScrollView>

    </View>
  );
};

export default Notification;
