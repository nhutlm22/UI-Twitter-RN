import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewST: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: fonts.sfProBlack,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 14,
  },
  textContent: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.sfProBlack,
    color: colors.titleSearch,
  },
  textCreate: {
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  buttonCreate: {
    backgroundColor: colors.primary, 
    marginVertical: 16
  },
});
