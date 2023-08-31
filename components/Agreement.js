import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
// import CheckBox from 'react-native-check-box'

export default function Agreement() {
    const handleButtonPress = () => {
      console.log('Button Pressed');
    };

  return (
    <View style={styles.agreementContainer}>
        <View style={styles.headerContainer} >
            <AntDesign name="arrowleft" size={24} color="white" />
        </View>
        <View style={styles.cardBodyContainerWrapper}>
            <View style={styles.cardBodyContainer}>
                <View style={styles.fontContainer}>
                    <FontAwesome name="bar-chart" size={24} color="#17D1E0" />
                </View>
                <Text style={styles.titleTypo}>help us improve wallet</Text>
                <Text style={styles.paraTypo}>Mango Wallet would like to gather usage data to better understand how our users interact with the extension. This data will be used to continually improve the usability and user experiences of our product.</Text>
            </View>
            <View style={styles.termsAndConditionContentContainer}>
                <Text style={styles.subTitle}>our wallet will...</Text>
                <View style={{marginVertical:16,}}>
                    <View style={styles.listItem}>
                        <FontAwesome name="check-circle" size={24} color="#32CC86" />
                        <Text style={styles.listTitle}>Always allow you to opt-out via setting</Text>
                    </View>

                    <View style={styles.listItem}>
                        <FontAwesome name="check-circle" size={24} color="#32CC86" />
                        <Text style={styles.listTitle}>Send anonymized click & page view events</Text>
                    </View>

                    <View style={styles.listItem}>
                        <Ionicons name="md-close-circle" size={24} color="#FC3044" />
                        <Text style={styles.listTitle}>Never collect keys, addresses, transactions, balances, hashes or any personal information</Text>
                    </View>

                    <View style={styles.listItem}>
                        <Ionicons name="md-close-circle" size={24} color="#FC3044" />
                        <Text style={styles.listTitle}>Never collect your full IP Address</Text>
                    </View>

                    <View style={styles.listItem}>
                        <Ionicons name="md-close-circle" size={24} color="#FC3044" />
                        <Text style={styles.listTitle}>Never sell date for profit. Ever!</Text>
                    </View>

                    {/* <View style={styles.checkboxContainer}>
                        <CheckBox
                        style={styles.checkbox}
                        onClick={()=>{
                            console.log('checked')
                        }}
                        />
                        <Text style={{fontSize:16,color:'white'}}>Do you like React Native?</Text>
                    </View> */}
                </View>
                <Pressable style={styles.buttonFull} onPress={handleButtonPress}>
                    <Text style={styles.btnText}>i agree</Text>
                </Pressable>
                <Text style={styles.viewFullWithTransparentBg} >
                    no, thanks
                </Text>
            </View>
            
             {/* <Pressable style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.text}></Text>
            </Pressable> */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    agreementContainer: {
        backgroundColor: "#292B4D",
        flex: 1,
    },
    headerContainer:{
        backgroundColor: '#292B4D',
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    fontContainer: {
        width:60,
        height:60,
        padding: 14,
        borderRadius: 100,
        backgroundColor:'#1579F814',
        alignItems: "center",
        justifyContent: "center",
    },
    titleTypo: {
        color: "white",
        fontSize: 24,
        fontWeight:'700',
        textAlign: "center",
        marginVertical: 18,
        textTransform:'capitalize',
        marginVertical:8
    },
    subTitle: {
        color: "white",
        fontSize: 16,
        fontWeight:'700',
        textTransform:'capitalize',
    },
    btnText: {
        color: "black",
        fontSize: 16,
        fontWeight:'700',
        marginVertical: 18,
        textTransform:'capitalize',
        marginVertical:8
    },
    listTitle: {
        color: "white",
        fontSize: 14,
        fontWeight:'500',
        lineHeight:21
    },
    paraTypo: {
        color: "white",
        fontSize: 14,
        fontWeight:'400',
        textAlign: "center",
        lineHeight:21
    },
    listItem: {
        flexDirection: "row",
        gap: 8,
        marginBottom:8
    },
    button: {
        width: 278,
        padding: 14,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        elevation: 3,
        backgroundColor: "#17D1E0",
    },
    buttonFull: {
        width: 342,
        padding: 16,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        elevation: 3,
        backgroundColor: "#17D1E0",
    },
    viewFullWithTransparentBg: {
        width: 342,
        padding: 16,
        textAlign:'center',
        color:'white',
        fontSize: 16,
        fontWeight:'700',
        marginVertical: 18,
        textTransform:'capitalize',

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
    cardBodyContainerWrapper: {
        flex:12,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    cardBodyContainer: {
        // flex:1,
        // borderWidth: 1,
        borderColor: "#17D1E0",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 32,
        paddingHorizontal: 24,
    },
    termsAndConditionContentContainer: {
        // flex:2,
        // borderWidth: 1,
        borderColor: "#17D1E0",
        borderRadius: 8,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 32,
        paddingHorizontal: 24,
    },
    checkboxContainer: {
        flexDirection: 'row',
        gap:8,
        // marginTop:10,
    },
    checkbox: {
        alignSelf: 'center',
        borderColor:'white'
      },
    
    
});
