import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../assets';

const SearchCard = ({index, item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.resultItem,
        {marginLeft: index === 0 ? 0 : 6},
      ]}>
      <Image source={item.avatar} style={styles.imageItem} />
      <View style={styles.resultItemRow}>
        <Text
          numberOfLines={1}
          style={[styles.titleItem, {width: item.tick ? 64 : 84}]}>
          {item.title}
        </Text>
        {item.tick && (
          <Image source={icons.tick_icon} style={styles.imageTick} />
        )}
      </View>
      <Text numberOfLines={1}>{item.tag}</Text>
    </TouchableOpacity>
  );
};

export default SearchCard;
