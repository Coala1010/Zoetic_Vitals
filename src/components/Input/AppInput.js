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
  onFocus,
  autoCapitalize,
  autoCompleteType,
  autoFocus,
  error,
  keyboardType,
  maxLength,
  placeholder,
  returnKeyType,
  textContentType,
  value,
  search,
  style,
}) => {
  return (
    <View style={[ styles.container, search && styles.containerSearch, style && style ]}>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onFocus={onFocus}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        selectionColor={brandColors.brandPrimary}
        style={[ styles.input, search && styles.inputSearch ]}
        textContentType={textContentType}
        value={value}
        placeholderTextColor={brandColors.greyMedium}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
      {search && <Text style={[styles.inputIcon,{ fontFamily: 'SS Gizmo', fontSize: 15, color: '#686868', marginTop: 5 }]}>search</Text>}
    </View>
  )
}

export default AppInput;
