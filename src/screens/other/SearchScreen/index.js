import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import styles from './styles';
import {colors} from '../../../theme';
import {icons} from '../../../assets';
import {routes} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {SEARCH_DATA} from '../../../assets/data';
import SearchCard from '../../../components/cards/SearchCard';

const Search = () => {
  const Header = () => {
    return (
      <View style={styles.viewHeader}>
        <View style={styles.viewInputSearch}>
          <Image source={icons.search_icon} style={styles.imageSearch} />
          <TextInput
            style={styles.viewSearchRow}
            placeholder="Search Twitter"
            placeholderTextColor={colors.titleSearch}
          />
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.textTitleRight}>Cancel</Text>
        </Pressable>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.viewRecent}>
        <Text style={styles.textRecent}>Recent searches</Text>
        <View style={styles.viewDelete}>
          <Image source={icons.delete_icon} style={styles.imageDelete} />
        </View>
      </View>
      <View style={styles.viewResult}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={SEARCH_DATA}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <SearchCard item={item} index={index} />
            )}
          />
        </ScrollView>
      </View>
      <View style={styles.viewSearched}>
        <Text style={styles.textSearched}>skhasanov</Text>
        <View style={styles.viewImageSearched}>
          <Image source={icons.arrow_solid_icon} style={styles.imageSearched} />
        </View>
      </View>
    </View>
  );
};

export default Search;
