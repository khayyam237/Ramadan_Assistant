import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Payment = () => {
    return (
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button  color={'#C70039'} title="BiddyaNando Foundation" onPress={() => console.log('Ramadan Guide Button pressed')} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Bijoy Foundation" onPress={() => console.log('Mosque Finder Button pressed')} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Islamic Foundation" onPress={() => console.log('Mosque Finder Button pressed')} />
        </View>
        <View style={styles.buttonContainer}>
            <Button color ='#C70039' title="RFAZ" onPress={() => console.log('Alarm Pressed')} />
        </View>
    </View>
    )
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
        // borderRadius:20,
        width:350,
        
      },
  });
export default Payment;