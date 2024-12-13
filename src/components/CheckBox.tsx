import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBoxIcon from '../assets/icons/CheckBoxIcon';
import CheckBoxIconUnchecked from '../assets/icons/CheckBoxIconUnchecked';

interface CheckBoxProps {
  label: string;
  value: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({label, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {value ? <CheckBoxIcon /> : <CheckBoxIconUnchecked />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 20,
    aspectRatio: 1,
  },
  label: {
    marginLeft: 10,
    fontSize: 15,
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Regular',
  },
});

export default CheckBox;
