import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from "react-native";
import { auth } from "../firebase";
import logo from "../assets/LogoKhanaSabkliye-01.png"
const BranchManager =()=>{
    const navigation =useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=()=>{
        auth.signInWithEmailAndPassword(email,password)
        .then(userCredentials=>{
           const user = userCredentials.user;
           alert("Login With :"+user.email);
           navigation.navigate('MngScreen')
       })
       .catch(error=>alert(error.message))
    }
return (

    
    <KeyboardAvoidingView
    behavior="padding"
    style={Styles.container}
>
<Image style={{width:'30%',height:'20%'}} source={logo}  resizeMethod="resize"/>
    <View style={Styles.inputContainer}>
  
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20 ,color:'#0782F9' ,marginBottom:20}}> Branch Manager </Text>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={Styles.input}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={Styles.input}
            secureTextEntry
        />
    </View>
    <View style={Styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleLogin}
            style={Styles.button}
        >
            <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
</KeyboardAvoidingView>

)
}


const Styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
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

export default BranchManager