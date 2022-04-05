import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import styles from './styles';
import {icons} from '../../../assets';

const Sap = () => {
  const Title = ({title, image}) => {
    return (
      <View style={styles.viewRecent}>
        <Text style={styles.textRecent}>{title}</Text>
        {image && (
          <View style={styles.viewDelete}>
            <Image source={icons.delete_icon} style={styles.imageDelete} />
          </View>
        )}
      </View>
    );
  };

  const Item = ({title, image, onPress, borderNull}) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            borderBottomWidth: borderNull ? 0 : 0.3,
          },
        ]}>
        <Text style={styles.textItem}>{title}</Text>
        <Pressable onPress={onPress} style={styles.viewPress}>
          <Image source={icons.right_arrow_icon} style={styles.imagePress} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Settings and privacy'} nullLeft titleRight={'Done'} />
      <Title title={'@pixsellz'} />
      <Item title={'Account'} />
      <Item title={'Privacy and safety'} />
      <Item title={'Notifications'} />
      <Item title={'Content preferences'} />
      <Title title={'General'} />
      <Item title={'Display and sound'} />
      <Item title={'Data usage'} />
      <Item title={'Accessibility'} />
      <Item title={'About Twitter'} />
      <View style={styles.viewFooter}>
        <Text style={styles.textFooter}>
          General settings affect all of your Twitter accounts on this device.
        </Text>
      </View>
    </View>
  );
};

export default Sap;
