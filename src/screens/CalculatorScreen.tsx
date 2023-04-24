import React from 'react'
import { Text, View } from "react-native";
import { useCalculator } from "../hooks/useCalculator";
import { styles } from "../theme/appTheme";
import { Button } from "../components/Button";

export const CalculatorScreen = () => {

  const {
    number,
    lastNumber,
    reset,
    changeState,
    deleteLastNumber,
    divide,
    buildNumber,
    multiply,
    subtract,
    add,
    calculate
  } = useCalculator();

  return (
    <View style={styles.container} >
      {lastNumber !== '0' && <Text style={styles.lastResult} >{lastNumber}</Text>}
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
        ellipsizeMode="middle"
      >{number}
      </Text>


      <View style={styles.row} >
        <Button text={(number !== '0' && !number.includes('-')) ? 'C' : 'AC'} color='#9B9B9B' onPress={reset} />
        <Button text='+/-' color='#9B9B9B' onPress={changeState} />
        <Button text='del' color='#9B9B9B' onPress={deleteLastNumber} />
        <Button text='/' color='#FF9427' onPress={divide} />
      </View>

      <View style={styles.row} >
        <Button text='7' onPress={buildNumber} />
        <Button text='8' onPress={buildNumber} />
        <Button text='9' onPress={buildNumber} />
        <Button text='X' onPress={multiply} color='#FF9427' />
      </View>

      <View style={styles.row} >
        <Button text='4' onPress={buildNumber} />
        <Button text='5' onPress={buildNumber} />
        <Button text='6' onPress={buildNumber} />
        <Button text='-' onPress={subtract} color='#FF9427' />
      </View>

      <View style={styles.row} >
        <Button text='1' onPress={buildNumber} />
        <Button text='2' onPress={buildNumber} />
        <Button text='3' onPress={buildNumber} />
        <Button text='+' color='#FF9427' onPress={add} />
      </View>

      <View style={styles.row} >
        <Button text='0' onPress={buildNumber} width />
        <Button text=',' onPress={buildNumber} />
        <Button text='=' color='#FF9427' onPress={calculate} />
      </View>

    </View>
  )
}