import React from 'react';
import { SafeAreaView, StatusBar } from "react-native";
import { styles } from "./src/theme/appTheme";
import { CalculatorScreen } from "./src/screens/CalculatorScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'black'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App