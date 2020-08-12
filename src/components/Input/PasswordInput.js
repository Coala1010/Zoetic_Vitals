import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// Styles
import { brandColors } from '../../styles/baseStyles';
import styles from './inputStyles';

const PasswordInput = ({ onChangeText, error, marginless, placeholder, value, eye }) => {
  const [ viewText, setViewText ] = useState(false);
  return (
    <View style={[ styles.container, marginless && { marginBottom: 0} ]}>
      <TextInput
        autoCapitalize='none'
        autoCompleteType='password'
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={!viewText ? true : false}
        selectionColor={brandColors.brandPrimary}
        style={styles.input}
        value={value}
        placeholderTextColor={brandColors.grbrandBlackeyMedium}
        underlineColorAndroid="transparent"
      />
      {eye && (
        <TouchableOpacity onPress={() => setViewText(!viewText)}>
          <Text style={[styles.eyeIcon, styles.inputIcon]}>👀</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default PasswordInput;
