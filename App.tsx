import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductScreen } from './src/ex1/ProductScreen';
import { PHONES } from './src/data/phones';
import { SelectPhoneApp } from './src/ex1/SelectPhoneApp';
import { SelectPhoneApi } from './src/ex1/SelectPhoneApi';

export default function App() {
  const samplePhone = PHONES[0];
  return (
    
    //<SelectPhoneApp phone={samplePhone} /> 

    <SelectPhoneApi></SelectPhoneApi>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
