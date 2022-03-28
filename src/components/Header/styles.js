import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../theme';
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
  viewAvatar: {height: 32, width: 32, borderRadius: 50, borderWidth: 0.4, borderColor: colors.black, position: 'relative'},
  imageAvatar: {height: '100%', width: '100%', borderRadius: 50},
  viewNotification: {height: 8, width: 8, backgroundColor: colors.primary, borderWidth: 1, borderColor: colors.white, borderRadius: 50, position: 'absolute', right: 0, top: 0},
});
