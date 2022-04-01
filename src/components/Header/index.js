import {StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {FeatureStrokeIcon, IconMenu, TwitterLogo} from '../../assets/svg';
import {colors, fonts} from '../../theme';
import {icons} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../navigation/routes';

const Header = ({
  pressLeft,
  pressRight,
  pressSearch,
  search,
  title,
  setting,
  feature,
  iconBack,
  titleRight,
  nullLeft,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={pressLeft}>
        {iconBack ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.viewImageLeft}>
            <Image source={icons.left_arrow_icon} style={styles.imageLeft} />
          </TouchableOpacity>

          ) : (
          <View style={styles.viewAvatar}>
            <Image source={icons.avatar1} style={styles.imageAvatar} />
            <View style={styles.viewNotification} />
          </View>
        )}
      </Pressable>

      {search ? (
        <TouchableOpacity onPress={pressSearch} style={styles.viewSearch}>
          <View style={styles.viewSearchRow}>
            <Image source={icons.search_icon} style={styles.imageSearch} />
            <Text style={styles.textSearch}>Search Twitter</Text>
          </View>
        </TouchableOpacity>
      ) : title ? (
        <Text
          style={[styles.textTitle, {marginLeft: titleRight ? 30 : 0.00001}]}>
          {title}
        </Text>
      ) : (
        <TwitterLogo width={27} height={22} />
      )}

      <Pressable onPress={pressRight}>
        {feature ? (
          <FeatureStrokeIcon width={23} height={22} />
        ) : titleRight ? (
          <Text style={styles.textTitleRight}>{titleRight}</Text>
        ) : setting ?(
          <View style={styles.viewImageRight}>
            <Image source={icons.setting_icon} style={styles.imageRight} />
          </View>
        ) : null}
      </Pressable>
    </View>
  );
};

export default Header;
