import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts } from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewSearch: {
    backgroundColor: colors.white,
    padding: 16, 
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
  },
  viewTextInput: {
    backgroundColor: colors.bgSearch, borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageSearch: {
    height: 13,
    width: 13,
    marginVertical: 10,
    marginLeft: 12,
    marginRight: 4,
  },
  textSearch: {
    fontSize: 17,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    paddingVertical: 6,
  },
});
