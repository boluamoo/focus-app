import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Focus } from './src/features/focus/Focus'
import { colors } from './src/utils/colors'
import { Timer } from './src/features/timer/Timer'
import { spacing } from './src/utils/sizes'

export default function App() {
  const [focusSubject, setFocusSubject] = useState('Love me JeJe')

  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.xl,
  },
})
