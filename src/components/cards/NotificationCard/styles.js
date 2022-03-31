import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingLeft: 51,
    paddingRight: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
  },
  viewRow: {flexDirection: 'row', justifyContent: 'space-between'},
  viewContent: {
    flex: 1,
    marginHorizontal: 8,
  },
  textContent: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textTitle: {fontWeight: 'bold', color: colors.black},
  imageStar: {height: 24, width: 24, tintColor: colors.purple},
  imageAvatar: {height: 37, width: 37},
  imageTakeBack: {height: 6, width: 11, tintColor: colors.primary},
});
