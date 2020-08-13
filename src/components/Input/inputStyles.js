import { StyleSheet } from 'react-native';
import {
  brandColors,
  layoutStyles,
  textStyles
} from '../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: layoutStyles.paddingMedium,
    minHeight: layoutStyles.blockMedium,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F9F2FF',
    // backgroundColor: 'red',
  },
  containerMulti: {
    minHeight: layoutStyles.blockMedium * 2 + layoutStyles.paddingMedium,
    marginBottom: 0
  },
  containerSearch: {
    marginBottom: 0,
    // height: layoutStyles.blockSmall,
    // minHeight: null
  },
  error: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: brandColors.brandSecondary
  },
  input: {
    flex: 1,
    fontFamily: textStyles.fontPrimaryExtraLight,
    fontSize: 14,
    color: brandColors.brandBlack,
    height: '100%',
    paddingHorizontal: layoutStyles.paddingMedium,
    paddingVertical: layoutStyles.paddingSmall,
  },
  inputSearch: {
    paddingVertical: 0,
  },
  inputIcon: {
    marginLeft: layoutStyles.paddingMedium,
    marginRight: layoutStyles.paddingSmall
  },
  eyeIcon: {
    fontFamily: textStyles.fontGizmo,
    fontSize: 20,
    color: brandColors.greyMedium,
    marginTop: 5,
  },
})
