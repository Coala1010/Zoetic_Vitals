import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { brandColors, textStyles } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 26,
    color: brandColors.brandBlack,
  },
  plusIcon: {
    fontFamily: textStyles.fontGizmo,
    fontSize: 40,
    color: brandColors.brandPrimary,
  },
});

const ActivityTitle = ({ title, onPlus, style }) => {
  return (
    <View style={[styles.titleContainer, style && style]}>
      <Text style={[styles.titleText, { marginTop: 5 }]}>
        {title}
      </Text>
      {onPlus && (
        <TouchableOpacity
          onPress={onPlus}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ActivityTitle;