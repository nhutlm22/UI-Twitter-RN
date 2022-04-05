import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme';
import {icons} from '../../assets';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../navigation/routes';

const AddButton = ({press, message}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {message ? (
        <TouchableOpacity onPress={(() => navigation.navigate(routes.SETTINGSANDPRIVACY))} style={{padding: 16}}>
          <Image
            source={icons.add_icon}
            resizeMode="contain"
            style={{height: 24, width: 22}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={(() => navigation.navigate(routes.TWEETINGSCREEN))} style={{padding: 16}}>
          <Image
            source={icons.add_text_icon}
            resizeMode="contain"
            style={{height: 24, width: 22}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddButton;
