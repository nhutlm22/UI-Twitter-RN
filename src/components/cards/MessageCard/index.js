import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets';
import styles from './styles';
import {colors} from '../../../theme';

const MessageCard = ({item, onPress, avatar, title, content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image source={item.avatar} style={styles.imageAvatar} />

        <View style={styles.viewContent}>
          <View style={styles.viewContentRow}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textContent}>{item.time}</Text>
          </View>
          <Text numberOfLines={2} style={[styles.textContent, {height: 38}]}>{item.content}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
