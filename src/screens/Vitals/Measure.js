import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIconsIco from 'react-native-vector-icons/MaterialCommunityIcons';
// Styles
import styles from './measureScreenStyles';
import { textStyles, brandColors } from '../../styles/baseStyles';
import NativeButton from '../../components/Buttons/NativeButton';

const MeasureScreen = ({ navigation, route }) => {
  const [ tabIndex, setTabIndex ] = React.useState(0);
  const [ tempMeasured, setTempMeasured ] = React.useState(false);
  const [ bloodMeasured, setBloodMeasured ] = React.useState(false);
  const [ spMeasured, setSpMeasured ] = React.useState(false);
  const [ tempLoading, setTempLoading ] = React.useState(false);
  const [ bloodLoading, setBloodLoading ] = React.useState(false);
  const [ spLoading, setSpLoading ] = React.useState(false);
  const [ tempValue, setTempValue ] = React.useState(0);
  const [ bloodValue1, setBloodValue1 ] = React.useState(0);
  const [ bloodValue2, setBloodValue2 ] = React.useState(0);
  const [ spValue1, setSpValue1 ] = React.useState(0);
  const [ spValue2, setSpValue2 ] = React.useState(0);

  const onStartTempMeasure = () => {
    setTempLoading(true);
    setTempValue(0);
    setTimeout(function() {
      setTempLoading(false);
      setTempMeasured(true);
      setTempValue(97.6);
    }, 2000);
  }

  const onStartBloodMeasure = () => {
    setBloodLoading(true);
    setTimeout(function() {
      setBloodLoading(false);
      setBloodMeasured(true);
      setBloodValue1(124);
      setBloodValue2(70);
    }, 2000);
  }

  const onStartSpMeasure = () => {
    setSpLoading(true);
    setTimeout(function() {
      setSpLoading(false);
      setSpMeasured(true);
      setSpValue1(96);
      setSpValue2(78);
    }, 2000);
  }

  const onCompleteBtn = () => {
    navigation.goBack();
    route.params.finishMeasure({ tempValue, bloodValue1, bloodValue2, spValue1, spValue2 });
  }

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => setTabIndex(0)}
          style={styles.headerBtn}>
          <Text style={[styles.headerText, { color: tabIndex == 0 ? brandColors.brandPrimary : 'grey' }]}>
            Vitals Kit
          </Text>
          {tabIndex == 0 && <View style={styles.separator} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTabIndex(1)}
          style={styles.headerBtn}>
          <Text style={[styles.headerText, { color: tabIndex == 1 ? brandColors.brandPrimary : 'grey' }]}>
            Camera
          </Text>
          {tabIndex == 1 && <View style={styles.separator} />}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.measureItemContainer}>
          <View style={styles.measureTextContainer}>
            <Text style={{ color: brandColors.brandPrimary, fontSize: 14, fontWeight: 'bold' }}>Temperature</Text>
            {tempLoading ?
              <ActivityIndicator size="large" color={brandColors.brandPrimary} />:
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    color: tempMeasured ? brandColors.brandPrimary : 'grey',
                    fontSize: 50,
                    fontWeight: 'bold'
                  }}>
                    {tempValue}
                </Text>
                <MaterialCommunityIconsIco
                  name='temperature-fahrenheit'
                  size={20}
                  color={tempMeasured ? brandColors.brandPrimary : 'grey'}
                  style={{ marginTop: 40 }}/>
              </View>}
          </View>
          {(!tempMeasured && !tempLoading) &&
            <TouchableOpacity
              onPress={onStartTempMeasure}
              style={styles.startMeasureBtn}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Wear Thermometer to{'\n'}view Temperature</Text>
            </TouchableOpacity>}
        </View>
        <View style={styles.measureItemContainer}>
          <View style={styles.measureTextContainer}>
            <Text style={{ color: brandColors.brandPrimary, fontSize: 14, fontWeight: 'bold' }}>Blood</Text>
            {bloodLoading ?
              <ActivityIndicator size="large" color={brandColors.brandPrimary} />:
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    color: bloodMeasured ? brandColors.brandPrimary : 'grey',
                    fontSize: 50,
                    fontWeight: 'bold'
                  }}>
                    {bloodValue1}/
                </Text>
                <Text
                  style={{
                    color: bloodMeasured ? '#1CB4B9' : 'grey',
                    fontSize: 50,
                    fontWeight: 'bold'
                  }}>
                    {bloodValue2}
                </Text>
                <Text style={{ color: bloodMeasured ? brandColors.brandPrimary : 'grey', marginTop: 40 }}>mmHg</Text>
              </View>}
          </View>
          {!bloodMeasured && !bloodLoading &&
            <TouchableOpacity
              onPress={onStartBloodMeasure}
              style={styles.startMeasureBtn}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Wear blood pressure monitor{'\n'}to view Blood Press</Text>
            </TouchableOpacity>}
        </View>
        <View style={styles.measureItemContainer}>
          <View style={styles.measureTextContainer}>
            <Text style={{ color: brandColors.brandPrimary, fontSize: 14, fontWeight: 'bold' }}>SpO2</Text>
            {spLoading ?
              <ActivityIndicator size="large" color={brandColors.brandPrimary} />:
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    color: spMeasured ? brandColors.brandPrimary : 'grey',
                    fontSize: 50,
                    fontWeight: 'bold',
                  }}>
                    {spValue1}
                </Text>
                <Text style={{ color: spMeasured ? brandColors.brandPrimary : 'grey', marginTop: 40, marginRight: 20 }}>%</Text>
                <Text style={{ color: spMeasured ? brandColors.brandPrimary : 'grey', marginTop: 20, marginRight: 10 }}>PR</Text>
                <Text
                  style={{
                    color: spMeasured ? brandColors.brandPrimary : 'grey',
                    fontSize: 50,
                    fontWeight: 'bold'
                  }}>
                    {spValue2}
                </Text>
                <Text style={{ color: spMeasured ? brandColors.brandPrimary : 'grey', marginTop: 40 }}>bpm</Text>
              </View>}
          </View>
          {!spMeasured && !spLoading &&
            <TouchableOpacity
              onPress={onStartSpMeasure}
              style={styles.startMeasureBtn}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Wear Oximeter to{'\n'}view SpO2 and PR</Text>
            </TouchableOpacity>}
        </View>
      </ScrollView>

      <NativeButton
        style={styles.elementMargin}
        onPress={onCompleteBtn}
        type='primary'
        text='Complete'
      />

    </View>
  )
}

MeasureScreen.navigationOptions = { header: null };

export default MeasureScreen;