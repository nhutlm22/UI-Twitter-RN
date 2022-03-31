import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts } from '../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
  },
  viewRow1: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  textRow1: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
  },
  viewRow2: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  textRow2: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
  },
});
