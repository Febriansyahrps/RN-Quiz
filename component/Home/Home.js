import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('M1')}>
          <Text style={styles.title}>
            Materi 1
          </Text>
          <Text style={styles.text}>
            Pengertian & Unsur Drama
          </Text>  
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('M2')}>
          <Text style={styles.title}>
            Materi 2
          </Text>
          <Text style={styles.text}>
            Ciri-ciri, Tujuan & Manfaat Drama
          </Text>  
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('M3')}>
          <Text style={styles.title}>
            Materi 3
          </Text>
          <Text style={styles.text}>
            Jenis-Jenis Drama 
          </Text>  
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('M4')}>
          <Text style={styles.title}>
            Materi 4
          </Text>
          <Text style={styles.text}>
           Jenis-Jenis Drama 
          </Text>  
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    )
}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingLeft:25,
    paddingRight:25,
  },
  card: {
    marginTop: 25,
    width: '100%',
    height: 100,
    backgroundColor: '#00B894',
    borderRadius: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 20, 
    color: '#FFF',
    fontWeight: 'bold'
  },
  text:{
    marginTop: 40,
    marginLeft: 15,
    fontSize: 15, 
    color: '#FFF',
  },

})