import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";

const GOOGLE_MAPS_APIKEY = '';


export default function App() {
    const [location, setLocation] = useState(null);
    const navigation =useNavigation()
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            Location.watchPositionAsync({
                timeInterval: 2000,
                distanceInterval: 1
            }, (position) => {
                setLocation(position)
            });
        })();
    }, []);

    const handleFaom=()=>{
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
           
            <MapView region={{
                latitude: location && location.coords.latitude,
                longitude: location && location.coords.longitude,
                latitudeDelta: 0,
                longitudeDelta: 0
            }} style={styles.map}>
                       {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.9200172 ,
                            longitude: 67.0612345
                        }}
                        title={"Aliabad"}
                        description={"Aliabad"}
                    />}
                     {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.8732834 ,
                            longitude: 67.0337457,
                        }}
                        title={"Numaish chowrangi"}
                        description={"Numaish chowrangi"}
                    />}
                       {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.8278999 ,
                            longitude: 67.0688257,
                        }}
                        title={"Saylani house phase 2"}
                        description={"Saylani house phase 2"}
                    />}
                     {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.8073692 ,
                            longitude: 67.0357446,
                        }}
                        title={"Touheed commercial"}
                        description={"Touheed commercial"}
                    />}
                     {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.8138924,
                            longitude: 67.0677652,
                        }}
                        title={"Sehar Commercial"}
                        description={"Sehar Commercial"}
                    />}
                     {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.8949528,
                            longitude:  67.1767206,
                        }}
                        title={"Jinnah avenue"}
                        description={"Jinnah avenue"}
                    />}
                      {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.9132328,
                            longitude:  67.1246195,
                        }}
                        title={"Johar chowrangi"}
                        description={"Johar chowrangi"}
                    />}
                       {location &&
                    <MapView.Marker
                        style={{ height: 20, width: 20 }}
                        // image={require('./assets/marker.png')}
                        coordinate={{
                            latitude:24.8673515,
                            longitude:  67.1246195,
                        }}
                        title={"Hill park"}
                        description={"Hill park"}
                    />}
             
            </MapView>
            <View style={{width:"100%",}}>
            <TouchableOpacity
                    onPress={handleFaom}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Application Foam</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height:"90%"
       
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
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }
});