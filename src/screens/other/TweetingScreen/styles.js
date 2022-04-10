import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewHeader: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTweet: {
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  textTweet: {
    fontSize: 15,
    fontFamily: fonts.sfProBlack,
    color: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
  textCancel: {
    fontSize: 17,
    fontFamily: fonts.sfProBlack,
    color: colors.primary,
  },
  viewBody: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bodyRow: {
    flexDirection: 'row',
  },
  imageAvatar: {
    width: 41,
    height: 41,
  },
  textInput: {
    width: 340,
    paddingVertical: 7,
    marginLeft: 8,
  },
  viewFooter: {
    backgroundColor: colors.white,
  },
  viewFooter1: {
    padding: 8,
    flexDirection: 'row',
  },
  viewCamera: {
    height: 78,
    width: 78,
    borderWidth: 0.3,
    borderColor: colors.border,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
 },
  imageCamera: {
    height: 26.5,
    width: 26.5,
  },
  viewFooter2: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    flexDirection: 'row',
    borderTopColor: colors.border,
    borderTopWidth: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  viewImageIcon: {
    flexDirection: 'row',
  },

  imageIcon: {
    height: 18,
    width: 18,
    marginLeft: 26,
  },

  viewAdd: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewTick: {
    height: 16.5,
    width: 16.5,
    backgroundColor: colors.white,
    borderRadius: 50,
    borderColor: colors.border,
    borderWidth: 2,
  },
  lineHeight: {
    height: 26,
    width: 0.5,
    backgroundColor: colors.border,
    marginHorizontal: 18,
  },
  viewImageAdd: {
    padding: 5.5,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  imageAdd: {
    height: 9,
    width: 9,
  },
  sc: {marginLeft: 8},
});
