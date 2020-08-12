import React, { useState, useEffect } from 'react';
import {
  Image,
  LayoutAnimation,
  TouchableOpacity,
  StatusBar,
  Linking,
  Text,
  View
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
// Components
import AppInput from '../../components/Input/AppInput';
import PasswordInput from '../../components/Input/PasswordInput';
import NativeButton from '../../components/Buttons/NativeButton';
import ActivityHeader from '../../components/Header/ActivityHeader';
// Styles
import styles from './signUpPatientStyles';
import { brandColors } from "../../styles/baseStyles";
import { IC_LOGO } from '../../utils/Images';

const SignUpPatient = ({ navigation }) => {
  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password1, setPassword1 ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ status, setStatus ] = useState('')
  // Form error states
  const [ buttonDisabled, setButtonDisabled ] = useState(true);
  const [ loading, setLoading ] = useState(false);

  // Create account logic
  const onCreateAccount = () => {
    setLoading(true);
  };

  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#F7FBFB', '#CFE9EB']} style={styles.screen}>
      <SafeAreaView>
        <ActivityHeader
          onBack={() => navigation.goBack()}
          backBtnTitle='Login' />

        <View style={styles.body}>
          <AppInput
            onChangeText={setFirstname}
            value={firstname}
            autoCapitalize='none'
            placeholder='First Name'
            textContentType='username' />

          <NativeButton
            onPress={onCreateAccount}
            loading={loading}
            disabled={buttonDisabled}
            text='Continue'
            type='primary'
            style={{ marginTop: 20 }}
            statusText={status} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

SignUpPatient.navigationOptions = { header: null };

export default SignUpPatient;
