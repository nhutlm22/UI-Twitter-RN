import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts } from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewHeader: {
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,

  },
  textHeader: {
    fontSize: 19, 
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: colors.black,
  },
  viewBody: {
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,

  },
  viewBodyColumn: {
    paddingVertical: 37,
    paddingHorizontal: 34,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textTitleBody: {
    fontSize: 22, 
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    marginBottom: 14,
    color: colors.black,
  },
  textBody: {
    textAlign: 'center',
    fontSize: 16, 
    fontFamily: fonts.sfProBlack,
    marginBottom: 14,
    color: colors.text,
    marginBottom: 15,
  },
});
