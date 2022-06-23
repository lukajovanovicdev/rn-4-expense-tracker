import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { globals } from '../../constants/styles';

const Input = ({ label, style, textInputConfig, invalid }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: { fontSize: 12, color: globals.colors.primary100, marginBottom: 4 },
  input: {
    backgroundColor: globals.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: globals.colors.primary700,
  },
  inputMultiline: { minHeight: 100, textAlignVertical: 'top' },
  invalidLabel: { color: globals.colors.error500 },
  invalidInput: { backgroundColor: globals.colors.error50 },
});
