import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets';
import {colors} from '../../../theme';
import styles from './styles';

const MemberOfCard = ({item, onPress, avatar, title, content}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.containerRow}>
        <View>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textTeam}>{item.team}</Text>
          {item.system ? <Text style={styles.textSystem}>systems</Text> : null}

          <Text style={styles.textMember}>
            {item.member} members
            {item.subscriber >= 2 ? (
              <Text> · {item.subscriber} subscribes</Text>
            ) : item.subscriber > 0 ? (
              <Text> · {item.subscriber} subscribe</Text>
            ) : null}
          </Text>
        </View>
        <View>
          <Image source={item.avatar} style={styles.imageAvatar} />
        </View>
      </View>
    </Pressable>
  );
};

export default MemberOfCard;
