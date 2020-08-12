import { Dimensions, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

const routeWidth = Dimensions.get('window').width - layoutStyles.paddingXXLarge * 2;

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 10,
    paddingBottom: 10,
    backgroundColor: brandColors.backgroundColor,
  },
  mainScreen: {
    flex: 1,
    ...layoutStyles.paddingLRXXL,
  },
  elementMargin: {
    marginVertical: 10,
  },
  activityHeaderMargin: {
    marginTop: 10,
  },
  plusIcon: {
    fontFamily: textStyles.fontGizmo,
    fontSize: 40,
    color: brandColors.brandPrimary,
  },
  tabviewHeader: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 15,
    color: brandColors.brandBlack,
  },
  trashIcon: {
    fontFamily: textStyles.fontGizmo,
    fontSize: 23,
    color: 'white',
    marginTop: 5,
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: brandColors.backgroundColor,
    marginTop: 10,
  },
  rowFront: {
    backgroundColor: brandColors.backgroundColor,
    justifyContent: 'center',
    height: 50,
    marginVertical: 10,
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
    height: 50,
    alignItems: 'center',
  },
  rowBackBtnContainer: {
    width: 60,
    height: '100%',
    backgroundColor: brandColors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteBtn: {
    flex: 1,
    backgroundColor: brandColors.greyMedium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  personSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  articleTitle: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 14,
    color: brandColors.brandBlack,
  },
  personName: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 14,
    color: brandColors.brandBlack,
  },
  personBirthday: {
    fontFamily: textStyles.fontPrimaryLight,
    fontSize: 14,
    color: brandColors.brandBlack,
    marginTop: 3,
  },
  likeText: {
    fontFamily: textStyles.fontPrimaryLight,
    fontSize: 16,
    color: brandColors.brandBlack,
    marginHorizontal: 5,
  },
  heartIcon: {
    fontFamily: textStyles.fontGizmo,
    fontSize: 20,
    color: brandColors.brandBlack,
  },
  backBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnText: {
    fontFamily: textStyles.fontPrimaryLight,
    fontSize: 16,
    color: 'white',
  },
  publishText: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 26,
    color: 'white',
  },
  publishDate: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 14,
    color: 'white',
  },
  routeScreen: {
    width: routeWidth,
    height: '100%',
    backgroundColor: brandColors.backgroundColor,
  },
});
