import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const index = ({onPress, title, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, ...style}}>
      <Text style={{...styles.textTitleButton, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;
