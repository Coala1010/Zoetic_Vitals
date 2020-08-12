import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FeatherIco from 'react-native-vector-icons/Feather';
import moment from 'moment';
// Components
import ActivityTitle from '../../components/Header/ActivityTitle';
// Styles
import styles from './vitalsHomeStyles';
import { layoutStyles, textStyles, brandColors } from '../../styles/baseStyles';

const VitalsHome = ({ navigation }) => {

  let currentDate = new Date();
  const weekDayString = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  const currentDayNumber = moment(currentDate).format('d');
  let startDay = moment(currentDate).add(-currentDayNumber, 'days');

  let weekDayNumbers = [];
  for (var i = 0; i < 7; i++) {
    weekDayNumbers.push(parseInt(moment(startDay).add(i, 'days').format('DD')));
  }

  const [selectedDayNumber, setSelectedDayNumber] = React.useState(currentDayNumber);

  const onSelectDayNumber = (num) => {
    setSelectedDayNumber(num);
  }

  return (
    <View style={styles.screen}>
      <ActivityTitle
        title='Vitals'
        onLeft={() => navigation.navigate('Measure')}
        onRight={() => navigation.navigate('Measure')} />
      <View style={styles.headerDateContainer}>
        <Text style={styles.headerDate}>
          {moment(currentDate).format('MMM DD, YYYY')}
        </Text>
        <Text style={styles.headerDateTitle}>
          How are you feeling today?
        </Text>
      </View>
      <View style={styles.mainScreen}>
        <View style={styles.datePickerContainer}>
          {weekDayString.map((t, index) => (
            <View key={index.toString()} style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text>{t}</Text>
              <TouchableOpacity
                onPress={() => onSelectDayNumber(index)}
                style={[styles.datePickerText, {
                  backgroundColor: selectedDayNumber == index ? brandColors.brandPrimary : null,
                }]}>
                <Text style={{ color: selectedDayNumber == index ? 'white' : 'black' }}>
                  {weekDayNumbers[index]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.vitalsContainer}>
        <View style={styles.vitalsColumnContainer}>
          <View style={styles.temperatureSection}>
            <Text style={styles.sectionTitle}>Temperature</Text>
          </View>
          <View style={styles.oximeterSection}>
            <Text style={styles.sectionTitle}>Oximeter</Text>
          </View>
        </View>
        <View style={styles.vitalsColumnContainer}>
          <View style={styles.bloodSection}>
            <Text style={styles.sectionTitle}>Blood</Text>
          </View>
          <View style={styles.faceSection}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <FeatherIco name="user" size={40} color={brandColors.brandPrimary} />
              <Text>facexxxxxxx</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Measure')}
          style={styles.measureBtn}>
          <Text style={styles.measureBtnText}>Measure{'\n'}Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

VitalsHome.navigationOptions = { header: null };

export default VitalsHome;