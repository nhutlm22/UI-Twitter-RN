import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
