import React from 'react';  
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Image} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer} from 'react-navigation';  
import Icon from 'react-native-vector-icons/Ionicons';  

import Profile from './../Profile/Profile';
import Soal from './../Soal/Soal';

class HomeScreen extends React.Component {  
    render() {  
      return ( 
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={HomeCss.container}>

        <TouchableOpacity style={HomeCss.cardBlue} onPress={() => this.props.navigation.navigate('M1')}>
          <Text style={HomeCss.title}>
            Materi 1
          </Text>
          <Text style={HomeCss.text}>
            Pengertian & Unsur Drama
          </Text>  
        </TouchableOpacity>
        
        <TouchableOpacity style={HomeCss.cardGreen} onPress={() => this.props.navigation.navigate('M2')}>
          <Text style={HomeCss.title}>
            Materi 2
          </Text>
          <Text style={HomeCss.text}>
            Ciri-ciri, Tujuan & Manfaat Drama
          </Text>  
        </TouchableOpacity>
        
        <TouchableOpacity style={HomeCss.cardBlue} onPress={() => this.props.navigation.navigate('M3')}>
          <Text style={HomeCss.title}>
            Materi 3
          </Text>
          <Text style={HomeCss.text}>
            Jenis-Jenis Drama 
          </Text>  
        </TouchableOpacity>
        
        <TouchableOpacity style={HomeCss.cardGreen} onPress={() => this.props.navigation.navigate('M4')}>
          <Text style={HomeCss.title}>
            Materi 4
          </Text>
          <Text style={HomeCss.text}>
           Jenis-Jenis Drama 
          </Text>  
        </TouchableOpacity>
        
      </View>
      </ScrollView> 
      );  
    }  
  }  
  const HomeCss = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      paddingLeft:25,
      paddingRight:25,
      paddingBottom: 25,
    },
    cardBlue: {
      marginTop: 25,
      width: '100%',
      height: 150,
      backgroundColor: '#00CEC9',
      borderRadius: 10,
    },
    cardGreen: {
      marginTop: 25,
      width: '100%',
      height: 150,
      backgroundColor: '#00CEC9',
      borderRadius: 10,
    },
    title: {
      marginTop: 5,
      marginLeft: 15,
      fontSize: 20, 
      color: '#FFF',
      fontWeight: 'bold'
    },
    text:{
      marginTop: 85,
      marginLeft: 15,
      fontSize: 15, 
      color: '#FFF',
    },
  
  })



  class SoalScreen extends React.Component {  
    render() {  
      return (  
            <Soal /> 
      );  
    }  
  }

  class ProfileScreen extends React.Component {  
    render() {  
      return (  
            <Profile /> 
      );  
    }  
  }

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        HomeScreen: { screen: HomeScreen,  
            navigationOptions:{   
                tabBarLabel:'Home',
                barStyle: { backgroundColor: '#FFF' },
                tabBarIcon: ( ) => (  
                  <View>  
                      <Image source={require('./../Image/Home.png')} />
                  </View>)    
            }  
        },    
        SoalScreen: { screen: SoalScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                barStyle: { backgroundColor: '#FFF' }, 
                tabBarIcon: () => (  
                  <View>  
                      <Image source={require('./../Image/Soal.png')} style={{height: 27, width:23}}/>
                  </View>)     
            }  
        },  
    
      ProfileScreen: { screen: ProfileScreen,  
        navigationOptions:{  
            tabBarLabel:'Profile',   
            barStyle: { backgroundColor: '#FFF' }, 
            tabBarIcon: () => (  
              <View>  
                  <Image source={require('./../Image/Profiles.png')} style={{height: 27, width:23}}/>  
              </View>),   
        }  
    },
  },  
    {  
      initialRouteName: "HomeScreen",  
      activeColor: '#000',  
      inactiveColor: '#f0edf6',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  