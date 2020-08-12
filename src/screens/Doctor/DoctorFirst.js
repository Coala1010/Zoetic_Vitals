import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Components
import ActivityTitle from '../../components/Header/ActivityTitle';
// Styles
import styles from './doctorFirstStyles';
import { brandColors, layoutStyles, textStyles } from '../../styles/baseStyles';
import { IC_SAMPLE } from '../../utils/Images';

const DoctorFirst = ({ navigation }) => {
  const [ insights, setInsights ] = useState(null);

  return (
    <SafeAreaView style={styles.screen}>
      <ActivityTitle title='Doctor' />
    </SafeAreaView>
  );
}

DoctorFirst.navigationOptions = { header: null };

export default DoctorFirst;