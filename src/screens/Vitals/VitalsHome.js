import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FeatherIco from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIco from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
// Components
import ActivityTitle from '../../components/Header/ActivityTitle';
import Api from '../../apis/Api';
// Styles
import styles from './vitalsHomeStyles';
import { textStyles, brandColors } from '../../styles/baseStyles';

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
  const [ tempValue, setTempValue ] = React.useState(null);
  const [ spValue1, setSpValue1 ] = React.useState(null);
  const [ spValue2, setSpValue2 ] = React.useState(null);
  const [ bloodValue1, setBloodValue1 ] = React.useState(null);
  const [ bloodValue2, setBloodValue2 ] = React.useState(null);

  // Api.get('ping/').then((response) => {
  //   console.log(response);
  // }).catch((x) => {
  // });

  const onSelectDayNumber = (num) => {
    setSelectedDayNumber(num);
  }

  const onStartMeasure = () => {
    navigation.navigate('Measure', {
      finishMeasure: onFinishMeasure
    })
  }

  const onFinishMeasure = data => {
    console.log('onFinishMeasure', data);
    if (data.tempValue != 0) {
      setTempValue(data.tempValue);
    }
    if (data.spValue1 != 0) {
      setSpValue1(data.spValue1);
    }
    if (data.spValue2 != 0) {
      setSpValue2(data.spValue2);
    }
    if (data.bloodValue1 != 0) {
      setBloodValue1(data.bloodValue1);
    }
    if (data.bloodValue2 != 0) {
      setBloodValue2(data.bloodValue2);
    }
  }

  return (
    <View style={styles.screen}>
      <ActivityTitle
        title='Vitals'
        onLeft={onStartMeasure}
        onRight={onStartMeasure} />
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
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', }}>{tempValue ? tempValue : 'N/A'}</Text>
              {tempValue != null && <MaterialCommunityIconsIco
                name='temperature-fahrenheit'
                size={20}
                color='white'
                style={{ marginTop: 10 }}/>}
            </View>
          </View>
          <View style={styles.oximeterSection}>
            <Text style={styles.sectionTitle}>Oximeter</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            {spValue1 == null ?
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>N/A</Text>:
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>{spValue1}</Text>
                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 14, marginRight: 10 }}>%</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>{spValue2}</Text>
                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 14 }}>bpm</Text>
              </View>
              }
            </View>
          </View>
        </View>
        <View style={styles.vitalsColumnContainer}>
          <View style={styles.bloodSection}>
            <Text style={styles.sectionTitle}>Blood</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            {bloodValue1 == null ?
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>N/A</Text>:
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', }}>{bloodValue1}</Text>
                  <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 10 }}>/</Text>
                  <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold', marginTop: 12 }}>{' '}{bloodValue2}</Text>
                </View>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 14 }}>mmHg</Text>
              </View>
              }
            </View>
          </View>
          <View style={styles.faceSection}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <FeatherIco name="user" size={40} color={brandColors.brandPrimary} />
              <Text>facexxxxxxx</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={onStartMeasure}
          style={styles.measureBtn}>
          <Text style={styles.measureBtnText}>Measure{'\n'}Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

VitalsHome.navigationOptions = { header: null };

export default VitalsHome;