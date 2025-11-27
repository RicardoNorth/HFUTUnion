import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Community</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})