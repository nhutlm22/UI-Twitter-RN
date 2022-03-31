import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts } from '../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  textTitleButton: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    color: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
