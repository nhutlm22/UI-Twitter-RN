import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    position: 'relative',
  },
  viewAvatar: {
    height: 32,
    width: 32,
    borderRadius: 50,
    borderWidth: 0.4,
    borderColor: colors.black,
    position: 'relative',
  },
  viewImageLeft: {
    height: 17,
    width: 10,
    borderRadius: 50,
  },
  imageAvatar: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  imageLeft: {
    height: 17,
    width: 10,
  },
  viewNotification: {
    height: 8,
    width: 8,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  viewSearch: {
    backgroundColor: colors.bgSearch,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSearchRow: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 72,
  },
  imageSearch: {
    height: 13,
    width: 13,
    alignSelf: 'center',
  },
  textSearch: {
    fontSize: 17,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
    marginLeft: 6,
  },
  textTitle: {
    fontSize: 17,
    fontFamily: fonts.sfProBlack,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: 6,
  },
  textTitleRight: {
    fontSize: 17,
    fontFamily: fonts.sfProSemiBold,
    color: colors.primary,
    marginLeft: 6,
  },
  viewImageRight: {
    height: 21.5,
    width: 21.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  imageRight: {height: 21.5, width: 21.5, tintColor: colors.primary},
});
