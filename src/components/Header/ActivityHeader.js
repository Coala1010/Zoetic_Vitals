import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { brandColors, textStyles } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  topbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  backBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrow: {
    fontFamily: textStyles.fontAir,
    fontSize: 20,
    color: brandColors.brandPrimary,
    marginHorizontal: 5,
  },
  shareIcon: {
    marginTop: 1,
    marginHorizontal: 4,
  },
  backBtnText: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 16,
    color: brandColors.brandPrimary,
  },
});

const ActivityHeader = ({ backBtnTitle, onBack, rightBtnTitle, rightBtnIcon, onRightBtn, color, style }) =>
  <View style={[styles.topbarContainer, style && style]}>
    <TouchableOpacity
      onPress={onBack}
      style={styles.backBtnContainer}>
      <Text style={[styles.leftArrow, color && color, { marginTop: 5 }]}>◅</Text>
      <Text style={[styles.backBtnText, color && color]}>
        {backBtnTitle}
      </Text>
    </TouchableOpacity>
    {rightBtnTitle && (
      <TouchableOpacity
        onPress={onRightBtn}
        style={styles.backBtnContainer}>
        <Text style={[styles.backBtnText, color && color]}>
          {rightBtnTitle}
        </Text>
      </TouchableOpacity>
    )}
  </View>
;

export default ActivityHeader;