import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.aqua,
    flex: 1,
    position: 'relative'
  },
  viewHeader: {
    backgroundColor: colors.bgSB,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBack: {
    height: 14,
    width: 14,
    tintColor: colors.white,
  },
  viewImageBack: {
    backgroundColor: '#0F0F0F',
    padding: 9,
    borderRadius: 50,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: fonts.sfProBlack,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    flex: 1,
    marginRight: 20,
  },
  viewBody: {
    backgroundColor: colors.white,
    position: 'relative',
    paddingHorizontal: 20,
  },
  bodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -24,
  },
  viewImageAvatar: {
    height: 68,
    width: 68,
  },
  imageAvatar: {
    height: '100%',
    width: '100%',
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 50,
    position: 'absolute',
    top: -24,
  },
  buttonEditProfile: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  textEditProfile: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.primary,
    paddingHorizontal: 14,
    fontWeight: 'bold',
  },
  viewTitle:{
    marginBottom: 8,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  textTag: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textContent: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  viewLink: {
    backgroundColor: colors.white
  },
  viewLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  imageLink: {
    height: 14,
    width: 14,
    marginRight: 4,
  },
  textLink: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.primary,
    marginRight: 14,
  },
  textCalender:{
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
    marginRight: 14,
  },
  viewFollow: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 6,
  },
  textFollowNumber: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    marginRight: 10,
    fontWeight: 'bold',

  },
  textFollow: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
    marginRight: 10,
  },
});
