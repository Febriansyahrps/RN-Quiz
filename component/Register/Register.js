import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class Register extends React.Component {
  render() {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={styles.container}>
          <View style={styles.txi}>  
            <Text style={styles.halotxt}>
              Halo,
            </Text>
            <Text style={styles.ayotxt}>
              Ayo Buat Akunmu Sekarang !
            </Text>

            <TextInput 
              style={styles.input} 
              placeholder="Nama"
              underlineColorAndroid="#FFF"
              placeholderTextColor="#DCD9D0"
            />
            <TextInput 
              style={styles.input} 
              placeholder="Email"
              underlineColorAndroid="#FFF"
              placeholderTextColor="#DCD9D0"
              keyboardType="email-address"
            />
            <TextInput 
              style={styles.input} 
              secureTextEntry
              placeholder="Kata Sandi"
              underlineColorAndroid="#FFF"
              placeholderTextColor="#DCD9D0"
              keyboardType="email-address"
            />
            <TextInput 
              style={styles.input} 
              secureTextEntry
              placeholder="Ulangi Kata Sandi"
              underlineColorAndroid="#FFF"
              placeholderTextColor="#DCD9D0"
              keyboardType="email-address"
            />
          </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Daftar</Text>
            </TouchableOpacity>

            <View style={styles.register}>
              <Text style={styles.regtxt}>Sudah Memiliki Akun ?</Text>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Login')}  
                >
                  <Text style={styles.regbtn}>Masuk</Text>
                </TouchableOpacity>
            </View>
          </View> 
        </ScrollView>
    )
}
}

const styles = StyleSheet.create({
container: {
  paddingLeft: 25,
  paddingRight: 25,
  flex: 1, 
  justifyContent: 'center',
  backgroundColor: '#0984E3'
},
txi:{
  alignSelf: "center"
},
halotxt: {
  color: '#FFF',
  fontSize: 50,
  fontWeight: 'bold'
},
ayotxt: {
  color: '#FFF',
  fontSize: 15,
},
input: {
  marginTop: 25,
  alignSelf: 'center',
  fontSize: 15,
  width: 300,
  color: '#fff',
},
btn: {
  alignSelf: 'center',
  marginTop: 50,
  padding:10,
  width: 200,
  backgroundColor: '#FBC531',
  borderRadius:10
},
btntxt:{
  fontSize: 15,
  color: '#FFF',
  alignSelf: 'center',
  fontWeight: 'bold'
},
register: {
  alignSelf: 'center',
  fontSize: 10,
  marginTop: 10,
  flexDirection: 'row',
},
regtxt: {
  color: '#FFF',
  alignSelf: 'center',
  fontSize: 12,
},
regbtn: {
  marginLeft: 5,
  color: '#FFF',
  fontSize: 15,
  fontWeight: 'bold',
},
});