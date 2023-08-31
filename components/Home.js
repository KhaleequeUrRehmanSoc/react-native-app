import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Card from './Card';

export default function Home() {


  return (
    <View style={styles.homeConentContainer}>
      <View style={styles.headerContainer} >
        <AntDesign name="arrowleft" size={24} color="white" />
        
      </View>
      <View style={styles.cardContainer}>
        <Card
        title='Import wallet'
        btnTtitle='Import wallet'
        icon={<MaterialCommunityIcons name="import" size={24} color="black" />}
        />
        <Card
        title='Create Wallet'
        btnTtitle='Create Wallet'
        icon={<AntDesign name="plus" size={24} color="black" />}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  homeConentContainer: {
    backgroundColor: '#292B4D',
    flex: 1,
  },
  headerContainer:{
      backgroundColor: '#292B4D',
      flex: 1,
      justifyContent:'center',
      alignItems:'flex-start',
  },
  cardContainer:{
    backgroundColor: 'transparent',
    flex: 1,
  },
  cardContainer:{
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:32,
    paddingHorizontal:24
  }
});
