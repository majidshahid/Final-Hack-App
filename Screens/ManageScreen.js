import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from "react-native";
import { auth,database } from "../firebase";
import logo from "../assets/LogoKhanaSabkliye-01.png"
import camera from "../assets/cm.png"
const ManageScreen =()=>{
    const navigation =useNavigation()
    const [QR,setQr]=useState('')
    const [SerialNo,setSerialNo]=useState('')
    const handleBranchManager=()=>{
       navigation.navigate("ScanScreen")


            
    }
return (

  
    <KeyboardAvoidingView
    behavior="padding"
    style={Styles.container}
>
<Image style={{width:'30%',height:'20%'}} source={logo}  resizeMethod="resize"/>
    <View style={Styles.inputContainer}>
  
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20 ,color:'#0782F9' ,marginBottom:20}}> Branch Manager </Text>
        <View style={{width:"100%",height:"50%",flexDirection:'row'}}>
<View style={{width:'50%',height:'100%',alignItems:"center",borderColor:'blue',borderWidth:2,borderRadius:5}}>
<Text>Verify With QR Code </Text>
<TouchableOpacity
                     onPress={handleBranchManager}
                    style={[Styles.button, Styles.buttonOutline]}
                >
                    <Image style={{width:"100%",height:135}} source={camera} resizeMode="contain"/>
                </TouchableOpacity>
</View>
<View style={{width:'50%',height:'100%',alignItems:"center",borderColor:'blue',borderWidth:2,borderRadius:5,margin:1,justifyContent:'space-around'}}>
<Text>Verify With Serial No</Text>
<TextInput
                    placeholder="Serial No"
                    value={SerialNo}
                    onChangeText={text => setSerialNo(text)}
                    style={Styles.input}
                    secureTextEntry
                />
                <TouchableOpacity
                    //  onPress={handleBranchManager}
                    style={[Styles.button, Styles.buttonOutline]}
                >
                    <Text style={Styles.buttonOutlineText}>Check SerialNo</Text>
                </TouchableOpacity>
</View>
        </View>
    </View>
</KeyboardAvoidingView>

)
}


const Styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
},
inputContainer: {
width: '80%'
},
input: {
backgroundColor: "white",
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius: 10,
marginTop: 5,
width:'80%'

},
buttonContainer: {
width: '80%',
justifyContent: "center",
alignItems: 'center',
marginTop: 40,
},
button: {
backgroundColor: "#0782F9",
width: '100%',
padding: 15,
borderRadius: 10,
alignItems: 'center'
},
buttonOutline: {
backgroundColor: "white",
marginTop: 5,
borderColor: "#0782F9",
borderWidth: 2,
},
buttonText: {
// color: 'white',
// fontWeight: '700',
// fontSize: 16
color: "white"
},
buttonOutlineText: {
color: '#0782F9',
fontWeight: '700',
fontSize: 16
}
})

export default ManageScreen