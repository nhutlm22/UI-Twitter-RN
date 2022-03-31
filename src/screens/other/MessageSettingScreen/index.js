import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {routes} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../theme';

const MessageSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const toggle = () => {
      if(isEnabled){
          setIsEnabled(!isEnabled)
      }else{
          setIsEnabled(isEnabled)

      }
  }

    const FormSetting = ({title, content, isEnabled, onPress}) => {
      return (
        <View style={styles.viewBodyColumn}>
          <View style={styles.viewBodyRow}>
            <Text style={styles.textTitle}>{title}</Text>
            <Pressable
              onPress={onPress}
              style={[
                styles.viewSwitch,
                {
                  backgroundColor: isEnabled
                    ? colors.lightGreen
                    : colors.bgSwitch,
                },
              ]}>
              {!isEnabled ? (
                <View style={[styles.viewContentSwitch]}></View>
              ) : (
                <View style={styles.viewContentSwitched}></View>
              )}
            </Pressable>
          </View>
          <Text style={styles.textContent}>
            {content}
            <Text style={{color: colors.primary}}>{' '}Learn more</Text>
          </Text>
        </View>
      );
    };

  return (
    <View style={styles.container}>
      <Header iconBack title={'Message Setting'} titleRight={'Done'} pressRight={(() => navigation.navigate(routes.MESSAGESCREENS))} />
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Privacy</Text>
      </View>
      <View style={styles.viewBody}>
        <FormSetting
        onPress={(() => setIsEnabled(!isEnabled))}
        isEnabled
          title={'Receive messages from anyone'}
          content={
            'You will be able to receive Direct Message requests from anyone on Twitter, even if you don’t follow them.'
          }
        />
        <FormSetting
          onPress={(() => setIsEnabled(!isEnabled))}
          isEnabled={false}
          title={'Quality filter'}
          content={
            'Filters lower-quality messages from your Direct Message requests.'
          }
        />
        <FormSetting
          onPress={(() => setIsEnabled(!isEnabled))}
          isEnabled
          title={'Show read receipts'}
          content={
            'When someone sends you a message, peopla in the conversation will know when you’ve seen it. If you turn off this setting, you won’t be able to see read receipts from others.'
          }
        />
        {/* <View style={styles.viewBodyColumn}>
          <View style={styles.viewBodyRow}>
            <Text style={styles.textTitle}>Receive messages from anyone</Text>
            <Pressable
              onPress={() => setIsEnabled(!isEnabled)}
              style={[
                styles.viewSwitch,
                {
                  backgroundColor: isEnabled
                    ? colors.lightGreen
                    : colors.bgSwitch,
                },
              ]}>
              {!isEnabled ? (
                <View style={[styles.viewContentSwitch]}></View>
              ) : (
                <View style={styles.viewContentSwitched}></View>
              )}
            </Pressable>
          </View>
          <Text style={styles.textContent}>
            You will be able to receive Direct Message requests from anyone on
            Twitter, even if you don’t follow them.
            <Text style={{color: colors.primary}}> Learn more</Text>
          </Text>
        </View>
        <View style={styles.viewBodyColumn}>
          <View style={styles.viewBodyRow}>
            <Text style={styles.textTitle}>Quality filter</Text>
            <Pressable
              onPress={() => setIsEnabled(!isEnabled)}
              style={[
                styles.viewSwitch,
                {
                  backgroundColor: isEnabled
                    ? colors.lightGreen
                    : colors.bgSwitch,
                },
              ]}>
              {!isEnabled ? (
                <View style={[styles.viewContentSwitch]}></View>
              ) : (
                <View style={styles.viewContentSwitched}></View>
              )}
            </Pressable>
          </View>
          <Text style={styles.textContent}>
            Filters lower-quality messages from your Direct Message requests.
            <Text style={{color: colors.primary}}> Learn more</Text>
          </Text>
        </View>
        <View style={styles.viewBodyColumn}>
          <View style={styles.viewBodyRow}>
            <Text style={styles.textTitle}>Show read receipts</Text>
            <Pressable
              onPress={() => setIsEnabled(!isEnabled)}
              style={[
                styles.viewSwitch,
                {
                  backgroundColor: isEnabled
                    ? colors.lightGreen
                    : colors.bgSwitch,
                },
              ]}>
              {!isEnabled ? (
                <View style={[styles.viewContentSwitch]}></View>
              ) : (
                <View style={styles.viewContentSwitched}></View>
              )}
            </Pressable>
          </View>
          <Text style={styles.textContent}>
            When someone sends you a message, peopla in the conversation will
            know when you’ve seen it. If you turn off this setting, you won’t be
            able to see read receipts from others.
            <Text style={{color: colors.primary}}> Learn more</Text>
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default MessageSetting;
