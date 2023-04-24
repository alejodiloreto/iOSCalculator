import { useRef, useState } from "react";

enum Operadores {
  add, subtract, multiply, divide
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('0');

  const operacion = useRef<Operadores>()

  const reset = () => {
    setNumber('0');
    setLastNumber('0');
  }

  const buildNumber = (textNumber: string) => {
    if (number.includes(',') && textNumber === ',') return;

    if (number === '0' && textNumber !== ',') {
      setNumber(textNumber);
    } else if (number === '-0') {
      setNumber('-' + textNumber)
    } else {
      setNumber(number + textNumber);
    }
  }

  const changeState = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number)
    }
  }

  const deleteLastNumber = () => {
    if (number === '0') {
      return;
    } else if ((number.length === 1) || (number.length === 2) && (number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, - 1));
    }
  }

  const changeLastNumber = () => {
    if (number.endsWith(',')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  }

  const divide = () => {
    changeLastNumber()
    operacion.current = Operadores.divide;
  }

  const multiply = () => {
    changeLastNumber()
    operacion.current = Operadores.multiply;
  }

  const add = () => {
    changeLastNumber()
    operacion.current = Operadores.add;
  }

  const subtract = () => {
    changeLastNumber()
    operacion.current = Operadores.subtract
  }

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (operacion.current) {
      case Operadores.add:
        setNumber(`${num1 + num2}`)
        break;
      case Operadores.subtract:
        setNumber(`${num2 - num1}`)
        break;
      case Operadores.multiply:
        setNumber(`${num1 * num2}`)
        break;
      case Operadores.divide:
        setNumber(`${num2 / num1}`)
        break;
    }
    setLastNumber('0');
  }
  return {
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
  }
}