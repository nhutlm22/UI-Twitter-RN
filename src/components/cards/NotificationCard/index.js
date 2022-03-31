import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets';
import styles from './styles';
import {colors} from '../../../theme';

const NotificationCard = ({item, onPress, avatar, title, content}) => {
  const [isCheck, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image source={icons.star_icon} style={styles.imageStar} />
        <View style={styles.viewContent}>
          <Image source={item.avatar} style={styles.imageAvatar} />

          {!isCheck ? (
            <View>
              <Text style={styles.textContent}>
                In case you missed{' '}
                <Text style={styles.textTitle}>{item.title}</Text> Tweet{' '}
                {item.content}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.textContent}>Đã thu</Text>
            </View>
          )}
        </View>
        <TouchableOpacity onPress={() => setCheck(!isCheck)}>
          {!isCheck ? (
            <Image
              source={icons.down_arrow_icon}
              style={styles.imageTakeBack}
            />
          ) : (
            <Image source={icons.up_arrow_icon} style={styles.imageTakeBack} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationCard;
