import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesomeIco from 'react-native-vector-icons/FontAwesome';
// Components
import ActivityTitle from '../../components/Header/ActivityTitle';
import AppInput from '../../components/Input/AppInput';
// Styles
import styles from './vitalsHomeStyles';
import { layoutStyles, textStyles } from '../../styles/baseStyles';
import { IC_SAMPLE } from '../../utils/Images';

const VitalsHome = ({ navigation, route }) => {

  return (
    <View style={styles.screen}>
      <View style={styles.mainScreen}>
        <ActivityTitle
          title='Vitals'
          style={styles.activityHeaderMargin}
          onPlus={() => navigation.navigate('MomentsCreate')} />
        <FontAwesomeIco.Button
          name="facebook"
          backgroundColor="#3b5998"
        >
          Login with Facebook
        </FontAwesomeIco.Button>
      </View>
    </View>
  )
}

VitalsHome.navigationOptions = { header: null };

export default VitalsHome;