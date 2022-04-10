import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Animated,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import AddButton from '../../../components/AddButton';
import {other} from '../../other';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from '../../../navigation/routes';
import { bottom } from '..';

const Drawer = createDrawerNavigator();

const Home = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Drawer.Navigator>
        <Drawer.Screen name={routes.HOMESCREENS} component={bottom.HOMESCREENS} />
      </Drawer.Navigator> */}
      <Header
        avatar
        feature
        pressRight={() => navigation.navigate(routes.TWEETINGOFMINESCREEN)}
        pressLeft={() => navigation.navigate(routes.TWEETINGOFSOMEONESCREEN)}
      />

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
      <AddButton />
    </View>
  );
};

export default Home;
