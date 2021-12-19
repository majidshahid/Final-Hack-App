import { useNavigation } from "@react-navigation/native";
import React,{ useState,useEffect } from "react";
import { StyleSheet,Text,View ,TouchableOpacity,TextInput,Button,Image} from "react-native";
import { auth,database } from "../firebase";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';
import logo from "../assets/LogoKhanaSabkliye-01.png"

const HomeScreen =()=>{
const navigation = useNavigation()
    const handleSignOut=()=>{
        auth.signOut()
        .then(()=>{
           navigation.replace('LOGIN')
        })
        .catch(error => alert(error.message))
    }
    
    const [pickervalue,setPickerValue]=useState("Monthly Ration")
    const [image, setImage] = useState(null);
    const [Name, setName] = useState(null);
    const [FatherName, setFatherName] = useState(null);
    const [CNIC, setCNIC] = useState(null);
    const [DateOfBirth, setDateOfBirth] = useState(null);
    const [FamilyMamber, setFamilyMamber] = useState(null);
    const [Income, setIncome] = useState(null);
    const handleSubmit=()=>{
        let data={
            pickervalue,
            Name,
            FatherName,
            CNIC,
            DateOfBirth,
            FamilyMamber,
            Income,

        }
        database.ref('user').push({
            data
          });
        
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    return (
        <View style={Styles.container}>
             <Image style={{width:'30%',height:'20%'}} source={logo}  resizeMethod="resize"/>
             <TouchableOpacity
style={{ backgroundColor: "#0782F9",
width: '20%',
padding: 8,
borderRadius: 10,
alignItems: 'center'}}
onPress={handleSignOut}
>
<Text style={Styles.buttonText} >Sign Out</Text>
</TouchableOpacity>
<View style={{width:"90%",height:'70%'}}>
<TextInput
                    placeholder="Name"
                    value={Name}
                    onChangeText={text => setName(text)}
                    style={Styles.input}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Father Name"
                    value={FatherName}
                    onChangeText={text => setFatherName(text)}
                    style={Styles.input}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="CNIC Number"
                    value={CNIC}
                    onChangeText={text => setCNIC(text)}
                    style={Styles.input}
                    keyboardType="number-pad"
                />
                <TextInput
                    placeholder="Date of Birth"
                    value={DateOfBirth}
                    onChangeText={text => setDateOfBirth(text)}
                    style={Styles.input}
                    keyboardType="number-pad"
                />
                 <TextInput
                    placeholder="Number of family Mamber"
                    value={FamilyMamber}
                    onChangeText={text => setFamilyMamber(text)}
                    style={Styles.input}
                    keyboardType="number-pad"
                />
                  <TextInput
                    placeholder="Enter Your Monthly Income"
                    value={Income}
                    onChangeText={text => setIncome(text)}
                    style={Styles.input}
                    keyboardType="number-pad"
                />
                <Picker
                style={Styles.Picker}
                selectedValue={pickervalue}
                onValueChange={(itemValue)=>setPickerValue(itemValue)}
                >
<Picker.Item label='Monthly Ration' value='Monthly Ration'/>
<Picker.Item label='Daily (1)' value='Daily (1)'/>
<Picker.Item label='Daily (2)' value='Daily (2)'/>
                </Picker>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
      <Button title="CNIC front and back images." onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  
             
</View>
<TouchableOpacity
style={Styles.button}
onPress={handleSubmit}
>
<Text style={Styles.buttonText} >Submit</Text>
</TouchableOpacity>

        </View>
        
    )
}

export default HomeScreen;

const Styles =StyleSheet.create({
    container:{
        flex:0.9,
        justifyContent:"center",
        alignItems:"center"

    },
    button: {
        backgroundColor: "#0782F9",
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom:2,
    },
   
    buttonText: {
       
        color: "white"
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    Picker:{
        width:200,
        height:45,
      borderWidth:1,
      borderColor:"black",
      backgroundColor:"gray",
      color:"white",
      marginTop:10
    }
})