import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets';
import {colors} from '../../../theme';
import styles from './styles';

const NewMessageCard = ({item, onPress, avatar, title, content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image source={item.avatar} style={styles.imageAvatar} />

        <View style={styles.viewContent}>
          <View style={styles.viewContentRow}>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
          <Text numberOfLines={1} style={[styles.textContent]}>{item.tag}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewMessageCard;
