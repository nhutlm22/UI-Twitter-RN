import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewContent: {
    flex: 1,
    marginLeft: 8,
    flexDirection: 'column',
  },
  textContent: {
    fontSize: 15,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  imageStar: {height: 24, width: 24, tintColor: colors.primary},
  imageAvatar: {height: 36, width: 36},
  imageTakeBack: {height: 6, width: 11, tintColor: colors.primary},
  viewContentRow: {flexDirection: 'row', justifyContent: 'space-between'},
});
