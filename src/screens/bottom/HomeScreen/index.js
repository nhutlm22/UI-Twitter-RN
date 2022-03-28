import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../theme';
import {
  CommentIcon,
  DownArrowIcon,
  FeatureStrokeIcon,
  IconMenu,
  LoveIcon,
  RetweetIcon,
  Round,
  ShareIcon,
  TwitterLogo,
} from '../../../assets/svg';
import styles from './styles';
import Header from '../../../components/Header';
import {icons} from '../../../assets';
import HomeCard from '../../../components/cards/HomeCard';
import {HOME_DATA} from '../../../assets/data';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />

      {/* {HOME_DATA?.map((item) => (
        <HomeCard item={item}/>
      ))} */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={HOME_DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HomeCard item={item} />}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
