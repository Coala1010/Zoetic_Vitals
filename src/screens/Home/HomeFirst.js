import React, { useState, useEffect } from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Components
import ActivityTitle from '../../components/Header/ActivityTitle';
import AppInput from '../../components/Input/AppInput';
import NativeButton from '../../components/Buttons/NativeButton';
import PasswordInput from '../../components/Input/PasswordInput';
// Styles
import styles from './homeFirstStyles';
import { brandColors, textStyles } from '../../styles/baseStyles';

const HomeFirst = ({ navigation }) => {
  const [ country, setCountry ] = useState('uk');

  const onUpdateAccount = () => {
    Alert.alert('Update button clicked');
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ActivityTitle title='Home' />
      <NativeButton
        style={styles.updateBtn}
        onPress={onUpdateAccount}
        type='primary'
        text='Update' />
    </SafeAreaView>
  )
}

HomeFirst.navigationOptions = { header: null };

export default HomeFirst;