import { Dimensions, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

const routeWidth = Dimensions.get('window').width - layoutStyles.paddingXXLarge * 2;

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    backgroundColor: brandColors.brandPrimary,
  },
  elementMargin: {
    marginVertical: 10,
  },
  headerDateContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginBottom: 40,
  },
  headerDate: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerDateTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  mainScreen: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  datePickerContainer: {
    backgroundColor: '#F7F7F7',
    marginTop: -20,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePickerText: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  vitalsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  vitalsColumnContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  temperatureSection: {
    backgroundColor: '#FC2171',
    flex: 4,
    borderRadius: 20,
    marginVertical: 10,
    padding: 15,
  },
  oximeterSection: {
    backgroundColor: brandColors.brandPrimary,
    flex: 6,
    borderRadius: 20,
    marginVertical: 10,
    padding: 15,
  },
  bloodSection: {
    backgroundColor: '#07BCC5',
    flex: 6,
    borderRadius: 20,
    marginVertical: 10,
    padding: 15,
  },
  faceSection: {
    backgroundColor: '#F7F7F7',
    flex: 4,
    borderRadius: 20,
    marginVertical: 10,
    padding: 15,
  },
  sectionTitle: {
    color: 'white',
    fontWeight: '500',
  },
  measureBtnContainer: {
    width: 85,
    height: 85,
    backgroundColor: '#E5E5E5',
    borderRadius: 43,
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: '#E72975',
    // borderWidth: 5,
  },
  measureBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#E5E5E5',
    borderRadius: 40,
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E72975',
    borderWidth: 5,
  },
  measureBtnText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: brandColors.brandPrimary,
  },
});
