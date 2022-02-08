import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.img}>Test</Text>
      <Image source={require('../assets/logo.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
