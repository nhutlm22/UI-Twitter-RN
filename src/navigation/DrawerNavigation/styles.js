import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewHeader: {},
  viewHeaderRow: {
    paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 16,
  },
  viewHeaderImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewHeaderImageRow: {
    flexDirection: 'row',
  },
  viewTitle: {},
  textTitle: {
    fontSize: 19,
    fontFamily: fonts.sfProBlack,
    fontWeight: 'bold',
    color: colors.black,
  },
  textTag: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  textFollow: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textFollowBold: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    fontWeight: 'bold',
    color: colors.black,
  },
  viewItem: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageItem: {
    height: 20,
    width: 20,
  },
  textItem: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    marginLeft: 20,
  },
  viewListItem: {
    marginVertical: 16,
  },
  viewFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  viewFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFooter: {
    height: 20,
    width: 20,
  },
  viewNumber: {height: 32, width: 32, position: 'relative'},
  viewNumberAbsolute: {
    height: 20,
    width: 20,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -5,
    right: -5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 50,
  },
  textNumber: {fontSize: 11, color: colors.white, fontFamily: fonts.sfProBlack},
  viewIsFocused: (isFocused, index) => ({
    borderBottomColor: isFocused ? colors.aqua : null,
    borderBottomWidth: isFocused ? 2 : null,
    paddingVertical: 12,
    marginTop: index === 0 ? 16 : 0,
    marginHorizontal: 24,
  }),
  textStyle: isFocused => ({
    color: isFocused ? colors.primary : colors.black,
    fontFamily: fonts.sfProBlack,
    fontSize: 16,
  }),
});
