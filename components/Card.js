import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Card({title='Import Wallet',btnTtitle='Import wallet',icon}) {

  const handleButtonPress = () => {
    console.log('Button Pressed');
  };

  return (
    <View style={styles.cardWrapper}>
        <View style={styles.cardContentContainer}>
          <Image
          // source={require("../assets/walletimage.jpeg")}
          source={require("../assets/importwalletimage.png")}
          style={{width:170,height:123}}
          // source={{
          //   uri: 'https://images.unsplash.com/photo-1682685796002-e05458d61f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
          // }}
        />

        <Text style={styles.typo}>{title && title}</Text>

        <Pressable style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.text}>{btnTtitle && btnTtitle}</Text>
          {icon && icon}
        </Pressable>

        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: '#292B4D',
        flex: 1,
        marginBottom:28
    },
    typo:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        marginVertical:18
        
      },
      button: {
        width:278,
        padding:14,
        flexDirection:'row',
        gap:5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#17D1E0',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
      cardContentContainer:{
        borderWidth:1,
        borderColor: '#17D1E0',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:32,
        paddingHorizontal:24
      }
});
