import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { globals } from '../../constants/styles';

const Button = ({ children, onPress, flat, style, mode }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: { borderRadius: 4, padding: 8, backgroundColor: globals.colors.primary500 },
  flat: { backgroundColor: 'transparent' },
  buttonText: { color: 'white', textAlign: 'center' },
  flatText: { color: globals.colors.primary200 },
  pressed: {
    opacity: 0.75,
    backgroundColor: globals.colors.primary100,
    borderRadius: 4,
  },
});
