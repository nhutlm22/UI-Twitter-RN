import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTopTab from './CustomTopTab';
import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../../../theme';
import {icons} from '../../../assets';
import {MEMBEROF_DATA} from '../../../assets/data';
import MemberOfCard from '../../../components/cards/MEMBEROFCARD';
import Button from '../../../components/Button';
import styles from './styles';
import AddButton from '../../../components/AddButton';

const SUBSCRIBED_TO = () => {
  //   const [data, setData] = useNavigation();
  //   data = MEMBEROF_DATA;
  return (
    <View style={{flex: 1}}>
      {MEMBEROF_DATA.length > 0 ? (
        <View style={styles.viewST}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textTitle}>
              You haven’t created or subscribed to any Lists
            </Text>
            <Text style={styles.textContent}>
              When you do, it’ll show up here.
            </Text>
            <Button
              title={'Create a List'}
              style={styles.buttonCreate}
              textStyle={styles.textCreate}
            />
          </View>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={MEMBEROF_DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MemberOfCard item={item} />}
        />
      )}
    </View>
  );
};

const MEMBER_OF = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={MEMBEROF_DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => <MemberOfCard item={item} />}
    />
  );
};

const ListScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header iconBack pressLeft={() => navigation.goBack()} title={'Lists'} />
      <Tab.Navigator
        lazy={true}
        optimizationsEnabled={true}
        tabBar={props => <CustomTopTab {...props} />}>
        <Tab.Screen name="Subscribed to" component={SUBSCRIBED_TO} />
        <Tab.Screen name="Member of" component={MEMBER_OF} />
      </Tab.Navigator>
      <AddButton add_member />
    </View>
  );
};

export default ListScreen;
