import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Focus } from './src/features/focus/Focus'

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Text>Here is where i'm going to build a timer</Text>
      ) : (
        <Focus />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
})
