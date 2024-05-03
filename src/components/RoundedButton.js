import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size=125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.white,
      fontSize: size / 4,
    },
  })
