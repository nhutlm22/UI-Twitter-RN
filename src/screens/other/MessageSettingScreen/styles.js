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
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
    backgroundColor: colors.bgSearch,
  },
  textHeader: {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: colors.titleSearch,
  },
  viewBody: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  viewBodyColumn: {
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.border,
  },
  viewBodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewSwitch: {
    flexDirection: 'row',
    borderRadius: 50,
    height: 31,
    width: 51,
  },
  viewContentSwitch: {
    backgroundColor: colors.white,
    margin: 2,
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
  },
  viewContentSwitched: {
    backgroundColor: colors.white,
    margin: 2,
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 23.5,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  textContent: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
    marginVertical: 6,
  },
});
