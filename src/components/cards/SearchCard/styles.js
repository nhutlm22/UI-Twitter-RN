import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  viewResult: {
    backgroundColor: colors.white,
    paddingHorizontal: 21,
    paddingVertical: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
  },
  resultItem: {
    height: 100,
    width: 84,
    alignItems: 'center',
  },
  resultItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleItem: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    textAlign: 'center'
  },
  imageItem: {
    height: 56,
    width: 56,
  },
  imageTick: {
    height: 15,
    width: 15,
  },
  
});
