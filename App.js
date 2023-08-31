import { StyleSheet, View,} from 'react-native';

import Home from './components/Home';
import Agreement from './components/Agreement';


export default function App() {

  return (
    <View style={styles.appComponentContainer}>
      <Home />
      {/* <Agreement /> */}
    </View>
  );
}




const styles = StyleSheet.create({
  appComponentContainer: {
    backgroundColor: '#292B4D',
    flex: 1,
    padding:24,
  },
});