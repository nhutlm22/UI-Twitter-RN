import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {bottom} from '../../bottom';
import {colors} from '../../../theme';
import styles from './styles';
import {icons} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import { routes } from '../../../navigation/routes';

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
  {
    id: 5,
    image: icons.media,
  },
  {
    id: 6,
    image: icons.media,
  },
];


const Tweeting = () => {
  const Header = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.viewHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(routes.BOTTOMTABBAR,
              ToastAndroid.show('Đăng thành công!', ToastAndroid.SHORT)
              )
        } style={styles.buttonTweet}>
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

  const Item = (item, index, image) => {
    console.log(index);
    return (
      <Image
        resizeMode="contain"
        source={item?.image}
        style={[
          styles.viewCamera,
          {borderColor: null},
          {marginLeft: index === 0 ? 0 : 8},
        ]}
      />
    );
  };

  const Footer = () => {
    return (
      <View style={styles.viewFooter}>
        <View style={styles.viewFooter1}>
          <View style={styles.viewCamera}>
            <Image source={icons.camera_icon} style={styles.imageCamera} />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.sc}>
            {DATA_IMAGE?.map(Item)}
          </ScrollView>
          {/* <FlatList
          style={{backgroundColor: colors.red, marginLeft: 8}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA_IMAGE}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <Item item={item} index={index} />}
        /> */}
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
