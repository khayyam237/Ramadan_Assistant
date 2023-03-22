import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ZakatCalculator from './JakatCalculator2';


const HomeScreen = ({navigation}) => {
    return (
        // <View style={styles.container}>
        //     <Button  color={'#2196F3'} title="Ramadan Guide" onPress={() => console.log('Ramadan Guide Button pressed')} />
        //     <Button title="Mosque Finder" onPress={() => console.log('Mosque Finder Button pressed')} />
        //     <Button title="Jakat Calculator" onPress={() => navigation.navigate('ZakatCalculator')} />
        //     <Button title="Alarm" onPress={() => console.log('Alarm Pressed')} />
        // </View>
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button  color={'#C70039'} title="Ramadan Guide" onPress={() => console.log('Ramadan Guide Button pressed')} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Mosque Finder" onPress={() => console.log('Mosque Finder Button pressed')} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Zakat Calculator" onPress={() => navigation.navigate('ZakatCalculator')} />
        </View>
        <View style={styles.buttonContainer}>
            <Button color ='#C70039' title="Alarm" onPress={() => console.log('Alarm Pressed')} />
        </View>
    </View>
    
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1EC',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonContainer: {
        flex:0.1,
        borderRadius:20,
        width:250,

        
      },
  });

export default HomeScreen;
