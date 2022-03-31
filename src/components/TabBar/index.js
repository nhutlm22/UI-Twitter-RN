import {FlatList, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { colors } from '../../theme';
import { HOME_DATA, NOTIFICATION_DATA } from '../../assets/data';
import NotificationCard from '../cards/NotificationCard';
import HomeCard from '../cards/HomeCard';

const TabBar = ({title1, title2}) => {
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
      <Pressable
        onPress={toggleCheck} 
        style={[
          styles.viewRow1,
          {borderBottomColor: !isCheck ? colors.primary : colors.white},
        ]}>
        <Text
          style={[
            styles.textRow1,
            {color: !isCheck ? colors.primary : colors.text},
          ]}>
          {title1}
        </Text>
      </Pressable>
      <Pressable
        onPress={toggleCheck}
        style={[
          styles.viewRow2,
          {borderBottomColor: isCheck ? colors.primary : colors.white},
        ]}>
        <Text
          style={[
            styles.textRow2,
            {color: isCheck ? colors.primary : colors.text},
          ]}>
          {title2}
        </Text>
      </Pressable>
    </View>
  );
};

export default TabBar;
