import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewRecent: {
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
    backgroundColor: colors.bgSearch,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textRecent: {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  viewDelete: {
    backgroundColor: '#ACB7C1',
    borderRadius: 50,
  },
  imageDelete: {
    height: 9,
    width: 9,
    margin: 5,
  },
  itemContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: colors.border,
  },
  textItem: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  viewPress: {
    height: 13,
    width: 13,
    borderRadius: 50,
    justifyContent: 'center',
  },
  imagePress: {
    height: 13,
    width: 7,
    margin: 5,
  },
  viewFooter: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  textFooter: {
    fontFamily: fonts.sfProBlack,
    fontSize: 14,
    color: colors.titleSearch,
  },
});
