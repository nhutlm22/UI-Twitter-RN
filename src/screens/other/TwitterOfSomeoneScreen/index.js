import {Animated, Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../../components/Header';
import {icons} from '../../../assets';
import SomeoneCard from '../../../components/cards/SomeoneCard';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes';
import {colors, fonts} from '../../../theme';
import Button from '../../../components/Button';

const ModalPopup = ({visible, children}) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setTimeout(() => setShowModal(true), 200);

      // Animated.timing(scaleValue, {
      //   toValue: 1,
      //   duration: 100,
      //   useNativeDriver: true,
      // }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);

      // Animated.timing(scaleValue, {
      //   toValue: 0,
      //   duration: 100,
      //   useNativeDriver: true,
      // }).start();
    }
  };
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'flex-end',
        }}>
        <Animated.View
          style={{
            backgroundColor: colors.white,
            borderTopStartRadius: 12,
            borderTopEndRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 6,
          }}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const TweetingOfSomeone = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [isEnabled, setIsEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header iconBack={() => navigation.goBack()} />
      <SomeoneCard pressRetweet={() => setVisible(true)} />
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View
            style={styles.lineModal}
          />
        </View>
        <View style={styles.bodyModalRow}>
          <Image
            resizeMode="contain"
            source={icons.retweet_icon}
            style={styles.imageModal}
          />
          <Text style={styles.textModal}>Retweet</Text>
        </View>
        <View style={styles.bodyModalRow}>
          <Image
            resizeMode="contain"
            source={icons.pen_icon}
            style={styles.imageModal}
          />
          <Text style={styles.textModal}>Retweet with comment</Text>
        </View>
        <View style={{padding: 16}}>
          <Button
            onPress={() => {
              setVisible(false);
            }}
            title={'Click Me'}
          />
        </View>
      </ModalPopup>
    </View>
  );
};

export default TweetingOfSomeone;
