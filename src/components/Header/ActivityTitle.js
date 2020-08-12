import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import FeatherIco from 'react-native-vector-icons/Feather';
import { brandColors, textStyles } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  titleText: {
    fontFamily: textStyles.fontPrimarySemiBold,
    fontSize: 18,
    color: 'white',
  },
  plusIcon: {
    fontFamily: textStyles.fontGizmo,
    fontSize: 30,
    color: 'white',
    marginTop: 12,
  },
});

const ActivityTitle = ({ title, onLeft, onRight, style }) => {
  return (
    <View style={[styles.titleContainer, style && style]}>
      {onLeft && (
        <TouchableOpacity
          onPress={onLeft}>
          <FeatherIco name="align-left" color='white' size={25} style={{ marginTop: 3 }} />
        </TouchableOpacity>
      )}
      <Text style={[styles.titleText, { marginTop: 5 }]}>
        {title}
      </Text>
      {onRight && (
        <TouchableOpacity
          onPress={onRight}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ActivityTitle;