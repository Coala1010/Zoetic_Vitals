import { StyleSheet } from 'react-native';
import { textStyles, brandColors } from '../../styles/baseStyles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: brandColors.backgroundColor,
  },
  elementMargin: {
    marginVertical: 10,
  },
  updateBtn: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 5,
    marginTop: 'auto',
  },
});
