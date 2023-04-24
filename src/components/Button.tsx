import React from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Props {
  text: string,
  onPress: (textNumber: string) => void,
  color?: string,
  width?: boolean,
}

export const Button = ({ text, onPress, color, width }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress( text )} >
      <View style={[
        styles.button,
        {
          backgroundColor: color ? color : '#2D2D2D',
          width: width ? 180 : 80
        }
      ]}>
        <Text style={[styles.textButton,
        {
          color: (color === '#9B9B9B') ? 'black' : 'white',
          textAlign: width ? 'left' : 'center',
          marginLeft: width ? 21 : 0,
        }
        ]} >{text}</Text>
      </View>
    </TouchableOpacity>
  )
}