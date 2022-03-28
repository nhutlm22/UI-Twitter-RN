import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {colors, fonts} from '../../../theme';
import styles from './styles';
import {icons} from '../../../assets';
import {
  DownArrowIcon,
  LoveIcon,
  RetweetIcon,
  ShareIcon,
} from '../../../assets/svg';

const HomeCard = ({item, avatar, title, content, comment, retweet, love}) => {
  const [isCheck, setCheck] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;

  // const check = () => setCheck(isCheck => !isCheck);

  // const toggleThu = () => {
  //   if (!isCheck) {
  //     Animated.timing(scaleValue, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //     setCheck(true);
  //   } else {
  //     Animated.timing(scaleValue, {
  //       toValue: 1,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //     setCheck(false);
  //   }
  // };

  const Footer = () => {
    return (
      <View style={styles.viewFooter}>
        <View style={styles.viewRow}>
          <Image
            style={{
              width: 15,
              height: 14.5,
            }}
            source={icons.comment}
          />
          <Text style={styles.textRow}>{item.comment}</Text>
        </View>
        <View style={styles.viewRow}>
          <RetweetIcon width={18} height={13} />
          <Text style={styles.textRow}>{item.retweet}</Text>
        </View>
        <View style={styles.viewRow}>
          <LoveIcon width={15} height={14.5} />
          <Text style={styles.textRow}>{item.love}</Text>
        </View>
        <View style={styles.viewRow}>
          <ShareIcon width={15} height={14.5} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={item.avatar} style={styles.imageAvatar} />
      <View style={styles.viewBody}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <TouchableOpacity onPress={(() => setCheck(!isCheck))}>
            {!isCheck ? (
              <Image source={icons.down_arrow_icon} style={styles.imageTakeBack}/>
            ) : (
              <Image source={icons.up_arrow_icon} style={styles.imageTakeBack}/>
            )}
          </TouchableOpacity>
        </View>
        {!isCheck ? (
          <View>
            <Text style={styles.textContent}>{item.content}</Text>
            <Footer />
          </View>
        ) : (
          <View>
            <Text style={styles.textContent}>Đã thu</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeCard;
