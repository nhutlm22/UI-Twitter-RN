import {Image, StyleSheet, Text, View, TextInput, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import { colors } from '../../../theme';
import { MESSAGE_DATA, NEWMESSAGE_DATA } from '../../../assets/data';
import MessageCard from '../../../components/cards/MessageCard';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { icons } from '../../../assets';
import NewMessageCard from '../../../components/cards/NewMessageCard';

const NewMessage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header iconBack title={'New Message'} pressRight={(() => navigation.navigate(routes.MESSAGESETTINGSCREENS))}/>
      <View style={styles.viewSearch}>
        <View style={styles.viewTextInput}>
          <Image source={icons.search_icon} style={styles.imageSearch} />
          <TextInput
            placeholder="Search for people and groups"
            placeholderTextColor={colors.titleSearch}
            style={styles.textSearch}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={NEWMESSAGE_DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => <NewMessageCard item={item} />}
          />
        </ScrollView>
    </View>
  );
};

export default NewMessage;


