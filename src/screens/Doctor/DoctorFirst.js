import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EventEmitter from 'events';
// Components
import NativeButton from '../../components/Buttons/NativeButton';
import { brandColors, textStyles } from '../../styles/baseStyles';

const DoctorFirst = ({ navigation }) => {
  const [ tempVal, setTempVal ] = useState(null);
  const [ airVal, setAirVal ] = useState(null);
  const [ humidityVal, setHumidityVal ] = useState(null);
  let _emitter = new EventEmitter();
  let tempInterval = setInterval(() => {
    _emitter.emit('temp_event', {
      value: Math.floor(Math.random() * 40) + 30
    }, Math.floor(Math.random() * 2000) + 100);
  });
  let airInterval = setInterval(() => {
    _emitter.emit('air_event', {
      value: Math.floor(Math.random() * 40) + 20
    }, Math.floor(Math.random() * 2000) + 100);
  });
  let humidityInterval = setInterval(() => {
    _emitter.emit('humidity_event', {
      value: Math.floor(Math.random() * 100) + 30
    }, Math.floor(Math.random() * 2000) + 100);
  });

  useEffect(() => {
    _emitter.addListener('temp_event', (data) => {
      console.log('temp_event', data);
      setTempVal(data.value);
    });
    _emitter.addListener('air_event', (data) => {
      console.log('air_event', data);
      setAirVal(data.value);
    });
    _emitter.addListener('humidity_event', (data) => {
      console.log('humidity_event', data);
      setHumidityVal(data.value);
    });

    return () => {
      _emitter.removeAllListeners();
      clearInterval(tempInterval);
      clearInterval(airInterval);
      clearInterval(humidityInterval);
    }
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.temperatureSection}>
        <Text style={styles.displayText}>Temperature</Text>
        <Text style={styles.displayText}>{tempVal ? tempVal : 'N/A'}</Text>
      </View>
      <View style={styles.airpressureSection}>
        <Text style={styles.displayText}>Air Pressure</Text>
        <Text style={styles.displayText}>{airVal ? airVal : 'N/A'}</Text>
      </View>
      <View style={styles.humiditySection}>
        <Text style={styles.displayText}>Humidity</Text>
        <Text style={styles.displayText}>{humidityVal ? humidityVal : 'N/A'}</Text>
      </View>
    </SafeAreaView>
  );
}

DoctorFirst.navigationOptions = { header: null };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: brandColors.backgroundColor,
  },
  elementMargin: {
    marginVertical: 10,
  },
  temperatureSection: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FC2171',
    borderRadius: 15,
    justifyContent: 'center',
  },
  airpressureSection: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#3C2865',
    borderRadius: 15,
    justifyContent: 'center',
  },
  humiditySection: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#07BCC5',
    borderRadius: 15,
    justifyContent: 'center',
  },
  displayText: {
    color: 'white',
    fontSize: 25,
    fontFamily: textStyles.fontPrimary,
    fontWeight: 'bold',
  },
}); 

export default DoctorFirst;