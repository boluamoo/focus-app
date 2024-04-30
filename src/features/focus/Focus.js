import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton'

export const Focus = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <RoundedButton
            style={styles.rounded}
            size={50}
            title="+"
            onPress={() => null}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    padding: 12,
    flex: 1,
  },
  rounded: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
