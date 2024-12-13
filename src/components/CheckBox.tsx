import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import CheckBoxIcon from '../assets/icons/CheckBoxIcon';
import CheckBoxIconUnchecked from '../assets/icons/CheckBoxIconUnchecked';

interface CheckBoxProps {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({label, value, onValueChange}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onValueChange(!value)}>
      <View style={styles.iconContainer}>
        {value ? <CheckBoxIcon /> : <CheckBoxIconUnchecked />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
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
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Regular',
  },
});

export default CheckBox;
