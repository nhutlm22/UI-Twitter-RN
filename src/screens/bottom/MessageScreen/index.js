import {Image, StyleSheet, Text, View, TextInput, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {icons} from '../../../assets';
import {colors} from '../../../theme';
import MessageCard from '../../../components/cards/MessageCard';
import { MESSAGE_DATA } from '../../../assets/data';
import { routes } from '../../../navigation/routes';
import { useNavigation } from '@react-navigation/native';
import AddButton from '../../../components/AddButton';

const Message = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title={'Message'} pressRight={(() => navigation.navigate(routes.MESSAGESETTINGSCREENS))}/>
      <View style={styles.viewSearch}>
        <View style={styles.viewTextInput}>
          <Image source={icons.search_icon} style={styles.imageSearch} />
          <TextInput
            placeholder="Search for people and groups"
            placeholderTextColor={colors.titleSearch}
            style={styles.textSearch}></TextInput>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={MESSAGE_DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => <MessageCard item={item} />}
          />
        </ScrollView>
        <AddButton message/>
    </View>
  );
};

export default Message;
