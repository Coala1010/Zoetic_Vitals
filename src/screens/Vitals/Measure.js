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
import styles from './measureScreenStyles';
import { layoutStyles, textStyles } from '../../styles/baseStyles';
import { IC_SAMPLE } from '../../utils/Images';

const MeasureScreen = ({ navigation, route }) => {

  return (
    <View style={styles.screen}>
      <ActivityTitle
        title='Vitals'
        style={styles.activityHeaderMargin}
        onPlus={() => navigation.navigate('MomentsCreate')} />
    </View>
  )
}

MeasureScreen.navigationOptions = { header: null };

export default MeasureScreen;