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
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewInputSearch: {
    backgroundColor: colors.bgInput,
    borderRadius: 50,
    marginVertical: 6,
    flexDirection: 'row',
    flex: 1,
    marginRight: 16,
  },
  imageSearch: {
    height: 13,
    width: 13,
    alignSelf: 'center',
    marginLeft: 12,
  },
  viewSearchRow: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: colors.black,
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
  textTitleRight: {
    fontSize: 17,
    fontFamily: fonts.sfProSemiBold,
    color: colors.primary,
    marginLeft: 6,
  },
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
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  imageItem: {
    height: 56,
    width: 56,
  },
  imageTick: {
    height: 15,
    width: 15,
  },
  resultItemRow: {
    flexDirection: 'row',
  },
  titleItem: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    width: 64,
  },
  viewSearched: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  textSearched: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  imageSearched: {
    height: '100%',
    width: '100%',
  },
  viewImageSearched: {
    height: 11,
    width: 11,
  },
  viewSearchRow: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: colors.black,
  },
});
