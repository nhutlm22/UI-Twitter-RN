import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {colors, fonts} from '../../../theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../navigation/routes';

const Trend = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Header search pressSearch={(() => navigation.navigate(routes.SEARCHSCREEN))} setting/>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Trends for you</Text>
      </View>
      <View style={styles.viewBody}>
        <View style={styles.viewBodyColumn}>
          <Text style={styles.textTitleBody}>No new trends for you</Text>
          <Text style={styles.textBody}>
            It seems like there's not a lot to show you right now, but you can
            see trends for other areas
          </Text>
          <Button title={'Change Location'}/>
        </View>
      </View>
    </View>
  );
};

export default Trend;
