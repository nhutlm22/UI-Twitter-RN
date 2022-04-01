import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {icons} from '../../../assets';
import {colors} from '../../../theme';
import {HOME_DATA} from '../../../assets/data';
import HomeCard from '../HomeCard';

const MineCard = ({item, onPress, pressRetweet}) => {
  const [isEnable, setEnable] = useState(false);

  const Header = ({}) => {
    return (
      <View style={styles.viewHeader}>
        <View style={styles.viewHeaderRow}>
          <Image source={icons.avatar4} style={styles.imageAvatar} />
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>karennne</Text>
            <Text style={styles.textTag}>@karennne</Text>
          </View>
        </View>
        <Pressable
          onPress={() => setEnable(!isEnable)}
          style={styles.viewImageDown}>
          {!isEnable ? (
            <Image source={icons.down_arrow_icon} style={styles.imageDown} />
          ) : (
            <Image source={icons.up_arrow_icon} style={styles.imageDown} />
          )}
        </Pressable>
      </View>
    );
  };

  const Body = ({}) => {
    return (
      <View style={styles.viewBody}>
        <View style={styles.viewContent}>
          {!isEnable ? (
            <Text style={styles.textContent}>
              ~~ hiring for a UX Lead in Sydney - who should I talk to?
            </Text>
          ) : (
            <Text style={styles.textContent}>Đã thu</Text>
          )}
        </View>
        <View style={styles.viewTime}>
          <Text style={styles.textTime}>
            17:18 · 2/14/20 ·{' '}
            <Text style={{color: colors.primary}}>Twitter Web App</Text>
          </Text>
        </View>
        {/* <View style={styles.viewTweetActivity}>
          <Image
            source={icons.activity_icon}
            style={styles.imageTweetActivity}
          />
          <Text style={styles.textTweetActivity}>View Tweet activity</Text>
        </View> */}
        <View style={styles.viewLike}>
          <Text style={styles.textLike}>
            <Text style={{fontWeight: 'bold', color: colors.black}}>1</Text>{' '}
            Like
          </Text>
        </View>
        <View style={styles.viewAction}>
          <Image
            resizeMode="contain"
            source={icons.comment}
            style={styles.imageAction}
          />
          <Pressable onPress={pressRetweet}>
            <Image
              resizeMode="contain"
              source={icons.retweet_icon}
              style={styles.imageAction}
            />
          </Pressable>
          <Image
            resizeMode="contain"
            source={icons.heart_icon}
            style={styles.imageAction}
          />
          <Image
            resizeMode="contain"
            source={icons.share_icon}
            style={styles.imageAction}
          />
        </View>

        <FlatList
          data={HOME_DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HomeCard item={item} />}
        />
      </View>
    );
  };

  const Footer = ({}) => {
    return (
      <View style={styles.viewFooter}>
        <Image source={icons.avatar1} style={styles.imageAvatarFooter} />
        <TextInput
          style={styles.viewSearchRow}
          placeholder="Add another Tweet"
          placeholderTextColor={colors.titleSearch}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Body />
      </ScrollView>

      <Footer />
    </View>
  );
};

export default MineCard;
