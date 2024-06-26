import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton'

export const Timing = ({ onChangeTime }) => {
  return (
    <View>
      <View style={styles.timingButtons}>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="10"
            onPress={() => onChangeTime(10)}
          />
        </View>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="15"
            onPress={() => onChangeTime(15)}
          />
        </View>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="20"
            onPress={() => onChangeTime(20)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timingButtons: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    gap: 10,
  },
  timingButton: {
    alignItems: 'center',
  },
})
