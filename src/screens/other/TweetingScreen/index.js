import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {bottom} from '../../bottom';
import {colors} from '../../../theme';
import styles from './styles';
import {icons} from '../../../assets';

export const DATA_IMAGE = [
  {
    id: 1,
    image: icons.media,
  },
  {
    id: 2,
    image: icons.media,
  },
  {
    id: 3,
    image: icons.media,
  },
  {
    id: 4,
    image: icons.media,
  },
];

const Tweeting = () => {
  const Header = () => {
    return (
      <View style={styles.viewHeader}>
        <Text style={styles.textCancel}>Cancel</Text>
        <TouchableOpacity style={styles.buttonTweet}>
          <Text style={styles.textTweet}>Tweet</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Body = () => {
    return (
      <View style={styles.viewBody}>
        <View style={styles.bodyRow}>
          <Image source={icons.avatar1} style={styles.imageAvatar} />
          <TextInput
            multiline={true}
            underlineColorAndroid="transparent"
            placeholder="What’s happening?"
            placeholderTextColor={colors.titleSearch}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  };
  const Footer = () => {
    const Item = ({item, index, image}) => {
      return (
        <Image
          resizeMode="contain"
          source={image}
          style={[
            styles.viewCamera,
            {borderColor: null},
            {marginLeft: index === 0 ? 0 : 8},
          ]}/>
      );
    };

    return (
      <View style={styles.viewFooter}>
        <View style={styles.viewFooter1}>
          <View style={styles.viewCamera}>
            <Image source={icons.camera_icon} style={styles.imageCamera} />
          </View>
          {DATA_IMAGE?.map(Item)}
        </View>
        <View style={styles.viewFooter2}>
          <View style={styles.viewImageIcon}>
            <Image
              resizeMode="contain"
              source={icons.image_icon}
              style={[styles.imageIcon, {marginLeft: null}]}
            />
            <Image
              resizeMode="contain"
              source={icons.gif_icon}
              style={styles.imageIcon}
            />
            <Image
              resizeMode="contain"
              source={icons.stats_icon}
              style={styles.imageIcon}
            />
            <Image
              resizeMode="contain"
              source={icons.location_icon}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.viewAdd}>
            <View style={styles.viewTick}></View>
            <View style={styles.lineHeight} />
            <View style={styles.viewImageAdd}>
              <Image source={icons.plus_icon} style={styles.imageAdd} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default Tweeting;
