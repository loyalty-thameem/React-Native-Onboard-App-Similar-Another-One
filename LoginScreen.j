import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
