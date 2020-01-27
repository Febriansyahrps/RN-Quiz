import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import {ENDPOINT, STORAGE_KEY} from '../Services/index';
import storage from '../Services/storage';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  Login = async () => {
    const {email, password} = this.state;
    const params = {email, password};
    try {
      this.setState({isLoading: true});
      console.log({params});
      const result = await ENDPOINT.login(params);
      console.log({result});
      if (result.expires_in === 3600) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.access_token);
        this.props.navigation.replace('Main')
      } else {
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('network error', ToastAndroid.SHORT);
    } finally {
      this.setState({isLoading: false});
    }
  };
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
        
        <Image source={require('./../Image/LogoEx.png')} style={styles.logo}/>

        <View style={styles.textinput}>
        <Image source={require('./../Image/Profile.png')} style={styles.img}/>
        <TextInput 
          style={styles.input} 
          placeholder="Email"
          placeholderTextColor="#DCD9D0"
          keyboardType="email-address"
          editable
          onChangeText={email => this.setState({email})}
          />
        </View>    

        <View style={styles.textinput}>
        <Image source={require('./../Image/Pass.png')} style={styles.img}/>
        <TextInput 
          secureTextEntry
          style={styles.input} 
          placeholder="Kata Sandi"
          placeholderTextColor="#DCD9D0"
          editable
          onChangeText={password => this.setState({password})}
          />
        </View>
        
        <TouchableOpacity style={styles.btn}
          onPress={() => this.Login()}  
        >
          <Text style={styles.btntxt}>Masuk</Text>
        </TouchableOpacity>
        
        <View style={styles.register}>
          <Text style={styles.regtxt}>Anda Belum Memilik Akun ?</Text>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Register')}  
          >
            <Text style={styles.regbtn}>Daftar</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#0984E3'
    },
    logo: {
      marginBottom: 20,
      height: 200,
      width: 200,
    },    
    textinput:{
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: '#FFF',
      marginTop: 10,
    },
    img: {
      marginTop: 10,
      width: 25,
      height: 25,
    },
    input: {
      fontSize: 15,
      width: 250,
      color: '#fff',
    },
    btn: {
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
      fontSize: 10,
      marginTop: 20,
      flexDirection: 'row',
    },
    regtxt: {
      color: '#FFF',
      alignSelf: 'center',
      fontSize: 12,
    },
    regbtn: {
      marginLeft: 10,
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    }
  });