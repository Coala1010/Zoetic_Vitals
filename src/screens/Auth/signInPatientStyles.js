import { StyleSheet } from 'react-native';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    ...layoutStyles.paddingLRXXL,
    justifyContent: 'center',
  },
  mainScreen: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 40,
  },
  marketing: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: layoutStyles.blockMedium
  },
  error: {
    justifyContent: 'center',
    height: layoutStyles.blockMedium,
  },
  controls: {
    width: '100%',
    marginTop: layoutStyles.paddingMedium
  },
  subText: {
    fontSize: 14,
    textAlign: 'center'
  },
  link: {
    fontFamily: textStyles.fontPrimaryLight,
    fontSize: 14,
    textDecorationLine: 'underline',
    color: brandColors.brandBlack,
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
  bottomContainer: {
    marginTop: 'auto',
    marginBottom: 10,
  }
})