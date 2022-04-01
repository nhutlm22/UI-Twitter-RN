import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {icons} from '../../../assets';
import styles from './styles';
import MineCard from '../../../components/cards/MineCard';

const TweetingOfMine = () => {
  return (
    <View style={styles.container}>
      <Header iconBack title={'Tweet'} />
      <MineCard />
    </View>
  );
};

export default TweetingOfMine;
