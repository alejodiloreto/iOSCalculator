import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    color: 'white',
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 20,
  },
  lastResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '400'
  }
})