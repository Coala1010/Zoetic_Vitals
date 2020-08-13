import React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
// Styles
import { brandColors } from '../../styles/baseStyles';
import styles from './inputStyles';

const AppInput = ({
  onChangeText,
  autoCapitalize,
  autoCompleteType,
  autoFocus,
  blurOnSubmit,
  error,
  keyboardType,
  maxLength,
  placeholder,
  returnKeyType,
  textContentType,
  value,
  style
}) => {
  return (
    <View style={[ styles.container, styles.containerMulti, style ]}>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        textAlignVertical='top'
        autoFocus={autoFocus}
        blurOnSubmit={blurOnSubmit}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={true}
        numberOfLines={4}
        onChangeText={onChangeText}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        selectionColor={brandColors.brandPrimary}
        style={[ styles.input, styles.multiline ]}
        textContentType={textContentType}
        value={value}
        placeholderTextColor={brandColors.greyMedium}
        underlineColorAndroid="transparent"
      />
    </View>
  )
}

export default AppInput;
