import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts } from '../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.bgSearch,
    borderRadius: 50,
    alignItems: 'center'
  },
  textTitleButton: {
    fontSize: 18,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    paddingVertical: 8,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});
