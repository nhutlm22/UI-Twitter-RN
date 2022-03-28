import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  imageAvatar: {
    width: 55,
    height: 55,
  },
  viewBody: {
    marginLeft: 8,
    flex: 1,
  },
  viewTitle: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: fonts.sfProBlack,
  },
  textContent: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.sfProBlack,
  },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  viewRow: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  textRow: {
    marginLeft: 3
  },
  imageTakeBack: {
    width: 11, 
    height: 6
  },
});
