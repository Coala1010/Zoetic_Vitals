import { StyleSheet } from 'react-native';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: brandColors.backgroundColor,
  },
  elementMargin: {
    marginVertical: 10,
  },
});
