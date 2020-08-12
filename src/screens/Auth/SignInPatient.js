import React, { useState, useEffect } from 'react';
import { Image, StatusBar, View, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// Components
import AppInput from '../../components/Input/AppInput';
import PasswordInput from '../../components/Input/PasswordInput';
import NativeButton from '../../components/Buttons/NativeButton';
// Styles
import styles from './signInPatientStyles';
import {brandColors, layoutStyles} from '../../styles/baseStyles';
import { IC_LOGO } from '../../utils/Images';

const SignInPatient = ({ navigation }) => {
  const [ email, setEmail ] = useState('appstoreconnect');
  const [ password, setPassword ] = useState('Apacio123');
  const [ loading, setLoading ] = useState(false);
  const [ accountError, setAccountError ] = useState(false);

  useEffect(() => { setAccountError(false) }, [ email, password ])

  // Sign in logic
  const onSignIn = async () => {
  };

  // Navigation
  const onForgotPassword = () => Linking.openURL('https://www.mypeep.co.uk/reset_password');
  const onCreateAccount = () => navigation.navigate('SignUpPatient');

  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#F7FBFB', '#CFE9EB']} style={styles.screen}>
      <StatusBar barStyle="dark-content" animated={true} backgroundColor={brandColors.brandLighter} />
      <SafeAreaView style={styles.mainScreen}>
        <AppInput
          onChangeText={setEmail}
          autoCapitalize={'none'}
          autoCompleteType='email'
          keyboardType='email-address'
          placeholder='Email or Username*'
          textContentType='emailAddress'
          value={email}
        />

        <PasswordInput
          placeholder='Password*'
          value={password}
          onChangeText={setPassword}
          eye={true}
        />

        <NativeButton
          style={styles.controls}
          // onPress={onSignIn}
          onPress={() => navigation.navigate('App')}
          type='primary'
          text='Sign In'
          loading={loading}
        />
        <NativeButton
          style={styles.bottomContainer}
          onPress={onCreateAccount}
          type='secondary'
          text='Sign Up'
        />
      </SafeAreaView>

    </LinearGradient>
  )
}

SignInPatient.navigationOptions = { header: null };

export default SignInPatient;
