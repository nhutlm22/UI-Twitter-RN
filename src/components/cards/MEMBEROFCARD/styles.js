import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.3,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textName: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textTeam: {
    fontSize: 19,
    fontFamily: fonts.sfProBlack,
    color: colors.black,
  },
  textSystem: {
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textMember: {
    fontSize: 14,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
    marginTop: 4,
  },
  imageAvatar: {
    height: 55, 
    width: 55
  },
});
