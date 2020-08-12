import { Dimensions, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

const routeWidth = Dimensions.get('window').width - layoutStyles.paddingXXLarge * 2;

export default StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: getStatusBarHeight(),
    // paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  elementMargin: {
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  headerBtn: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  headerText: { 
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    width: 90,
    height: 4,
    borderRadius: 2,
    backgroundColor: brandColors.brandPrimary
  },
  measureItemContainer: {
    backgroundColor: '#F7F7F7',
    height: 150,
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  measureTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  startMeasureBtn: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'rgba(60, 40, 100, 0.8)',
    width: '67%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
  },
});
