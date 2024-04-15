import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ScrollView } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasic from './components/FlatListBasic';
import SectionListBasic from './components/SectionListBasic';
import FetchExample from './components/FetchExample';
import Counter from './components/Counter';
import Exam from './components/Exam';

const logo = { uri: 'https://reactnative.dev/img/tiny_logo.png', width: 24, height: 24, };

export default function App() {
  return (
    <ScrollView style={{paddingTop: 24, paddingBottom: 40, paddingLeft: 2}}>
      <Image source={logo} />
      <Exam />
      <Image source={logo} />
      <Counter />
      <Image source={logo} />
      <FetchExample />
      <Image source={logo} />
      <SectionListBasic />
      <Image source={logo} />
      <FlatListBasic />
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name='Run Tum Tugger' />
      <Image source={logo} />
      <Cat name='Maru' num='1' />
      <Cat name='Run Tum Tugger' num='2' />
      <Image source={logo} />
      <HelloWorld />
    </ScrollView>
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
