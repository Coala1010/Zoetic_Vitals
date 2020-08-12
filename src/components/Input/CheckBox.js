import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
// Styles
import { brandColors, layoutStyles } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: 2,
    marginRight: layoutStyles.paddingMedium
  },
  checked: {
    backgroundColor: brandColors.brandPrimary
  }
})

const CheckBox = ({ onPress, checked }) => 
  <TouchableOpacity onPress={onPress} style={[ styles.checkbox, checked ? styles.checked : null ]} />

export default CheckBox;
