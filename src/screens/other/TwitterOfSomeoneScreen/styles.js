import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts } from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  lineModal: {
    height: 5,
    width: 36,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
  },
  bodyModalRow: {flexDirection: 'row', paddingVertical: 22, paddingHorizontal: 18, alignItems: 'center'},
  imageModal: {height: 24, width: 24},
  textModal :{marginHorizontal: 20, fontSize: 19, fontFamily: fonts.sfProBlack, color: colors.black},
  
});
