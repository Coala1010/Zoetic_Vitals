import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {brandColors, layoutStyles} from '../../styles/baseStyles';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: brandColors.brandLighter,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const AuthLoading = ({ navigation }) => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    return token;
  };

  useEffect(() => {
    getToken()
      .then(token => {
        if (token) {
          navigation.navigate('App', {
            screen: 'Moments',
            params: {
              screen: 'MomentsList',
            }
          });
        } else {
          navigation.navigate('Auth', {
            screen: 'SignInPatient'
          });
        }
      })
  });

  return (
    <View style={styles.screen}>
      <ActivityIndicator size='large' />
    </View>
  );
}

export default AuthLoading;