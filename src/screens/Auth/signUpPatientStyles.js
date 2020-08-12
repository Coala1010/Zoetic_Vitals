import { StyleSheet } from 'react-native';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  topbarMargin: {
    marginBottom: 10,
  },
  logo: {
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  body: {
    ...layoutStyles.paddingLRXXL,
    alignItems: 'center',
  },
  subText: {
    fontFamily: textStyles.fontPrimaryLight,
    color: brandColors.brandBlack,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
  link: {
    fontFamily: textStyles.fontPrimaryLight,
    fontSize: 14,
    textDecorationLine: 'underline',
    color: brandColors.brandBlack,
    lineHeight: 22,
  },
  policies: {
    marginTop: layoutStyles.paddingLarge,
    width: '100%',
    justifyContent: 'center'
  },
  policiesLinks: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
})