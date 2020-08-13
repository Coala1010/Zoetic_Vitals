import { StyleSheet } from 'react-native';
import { textStyles, brandColors } from '../../styles/baseStyles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  elementMargin: {
    marginVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  headerBtn: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 5,
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
    height: 120,
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
