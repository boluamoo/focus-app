import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { fontSizes, spacing } from '../utils/sizes'
import { colors } from '../utils/colors'

const minutesToMilli = (min) => {
  return min * 1000 * 60
}
const formatTime = (time) => (time < 10 ? `0${time}` : time)

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null)
  const countDown = () => {
    setMilli((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd()
        return time
      }
      const timeLeft = time - 1000
      // return progress
      onProgress(timeLeft / minutesToMilli(minutes))
      return timeLeft
    })
  }
  useEffect(() => setMilli(minutesToMilli(minutes)), [minutes])

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current)
      return
    }
    interval.current = setInterval(countDown, 1000)
    return () => {
      clearInterval(interval.current)
    }
  }, [isPaused])

  const [milli, setMilli] = useState(minutesToMilli(minutes))
  const minute = Math.floor(milli / 1000 / 60) % 60
  const seconds = Math.floor(milli / 1000) % 60

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: fontSizes.xxxl,
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
})
