import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { FeatureStrokeIcon, IconMenu, TwitterLogo } from '../../assets/svg'
import { colors } from '../../theme'
import { icons } from '../../assets'

const Header = ({pressLeft, pressRight, search}) => {
  return (
    <View
      style={styles.container}>
        <Pressable onPress={pressLeft} style={styles.viewAvatar}>
          <Image source={icons.avatar1} style={styles.imageAvatar}/>
          <View style={styles.viewNotification}/>
        </Pressable>
      {/* <TwitterLogo width={27} height={22}/> */}
      <View style={{height: 32, width: 286,  backgroundColor: colors.bgSearch}}>

      </View>
      <FeatureStrokeIcon width={23} height={22} />
    </View>
  )
}

export default Header
