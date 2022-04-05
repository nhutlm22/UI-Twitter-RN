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
import {routes} from '../../../navigation/routes';
import AddButton from '../../../components/AddButton';

const Home = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header
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
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import { bottom } from '../../bottom';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import { colors } from '../../../theme';
// import CustomTopTab from './CustomTopTab';

// const Tweeting = () => {
//   const Tab = createMaterialTopTabNavigator();

//   return (
//     <View style={{backgroundColor: colors.red}}>
//         <Tab.Navigator
//                   tabBar={props => <CustomTopTab {...props} />}

//            lazy={true}
//            optimizationsEnabled={true}>
//           <Tab.Screen name="Hệ thống" component={bottom.MESSAGESCREENS} />
//           <Tab.Screen name="Đơn hàng" component={bottom.HOMESCREENS} />
//         </Tab.Navigator>   
//          </View>
//   );
// };

// export default Tweeting;

// const styles = StyleSheet.create({});

