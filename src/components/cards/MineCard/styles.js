import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    position: 'relative',
    flex: 1,
  },
  viewHeader: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  viewBody: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  viewHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageAvatar: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  viewImageDown: {
    width: 11,
    height: 6,
  },
  imageDown: {
    width: 11,
    height: 6,
  },
  viewTitle: {
    marginLeft: 8,
  },
  textTitle: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    fontWeight: 'bold',
  },
  textTag: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  viewContent: {
    paddingVertical: 12,
  },
  textContent: {
    fontSize: 22,
    fontFamily: fonts.sfProLight,
    color: colors.black,
  },
  viewTime: {
    paddingVertical: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.3,
  },
  viewTweetActivity: {
    paddingVertical: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewLike: {
    paddingVertical: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.3,
  },
  viewAction: {
    paddingVertical: 12,
    paddingHorizontal: 54,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.3,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageAction: {
    height: 18,
    width: 18,
  },
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.3,
    borderTopColor: colors.border,
  },
  imageAvatarFooter: {
    height: 35,
    width: 35,
  },
  viewSearchRow: {
    backgroundColor: colors.bgInput,
    borderRadius: 50,
    marginVertical: 8,
    marginLeft: 6,
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  textTime: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textTweetActivity: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
    marginLeft: 10,
  },
  imageTweetActivity:{
    height: 14,
    width: 9,
  },
  textLike: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
});
