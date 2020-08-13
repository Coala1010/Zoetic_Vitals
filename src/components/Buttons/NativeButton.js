import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
// Styles
import { brandColors, textStyles } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  button: {
    ...textStyles.general,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontFamily: textStyles.fontPrimarySemiBold,
  },
  primary: {
    backgroundColor: brandColors.brandPrimary
  },
  primaryText: {
    color: 'white',
    fontSize: 16,
  },
  secondary: {
    backgroundColor: brandColors.brandSecondary,
  },
  secondaryText: {
    color: '#67BEC4',
    fontSize: 16,
  },
  third: {
    backgroundColor: brandColors.brandSecondary,
    borderColor: brandColors.brandPrimary,
    borderWidth: 2,
  },
  thirdText: {
    color: brandColors.brandPrimary,
    fontSize: 14,
  },
  primaryLoading: {
    backgroundColor: brandColors.brandPrimaryOpacity
  },
  secondaryLoading: {
    backgroundColor: brandColors.brandSecondary + '77'
  },
});

const NativeButton = ({
  onPress,
  disabled,
  loading,
  statusText,
  style,
  text,
  type
}) =>
  <TouchableOpacity
    onPress={ onPress }
    style={[
      styles.button,
      styles[type],
      (loading || disabled) && styles[`${type}Loading`],
      style
    ]}
    disabled={disabled || loading}
  >
    { statusText ?
        (<Text style={[ styles.buttonText, styles[`${type}Text`] ]}>
          { statusText }
          </Text>)
        : loading ?
          (<ActivityIndicator size='small' color='#fff' />)
          : (<Text style={[ styles.buttonText, styles[`${type}Text`] ]}>
              { text }
            </Text>)
    }
  </TouchableOpacity>
;

export default NativeButton;
