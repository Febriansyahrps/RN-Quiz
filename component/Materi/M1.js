import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';


export default class M1 extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
        <Text style={styles.judul}>
          Pengertian Drama
        </Text>
        <Text style={styles.text}>           Drama merupakan kata yang berasal dari bahasa Yunani, yaitu Draomai yang memiliki arti berbuat
           dan bertindak. Sedangkan kata drama sendiri memiliki arti suatu perbuatan dan tindakan. 
           Pengertian drama secara umum yaitu suatu karya sastra yang ditulis dalam bentuk dialog dan 
           mempunyai maksud untuk menampilkan sebuah pertunjukan yang diperankan oleh aktor.</Text>
        
        <Text style={styles.judul1}>
          Pengertian Drama Menurut Para Ahli
        </Text>
        <Text style={styles.text}>1.  Menurut Moultoun, drama merupakan kisah hidup yang dilukiskan dalam 
        sebuah pertunjukan gerak.
        </Text>
        <Text style={styles.text}>2.  Menurut Ferdinand Brunetierre, drama merupakan sebuah seni yang dapat 
        menghasilkan sebuah gerakan dan aksi yang dapat dipertontonkan.
        </Text>
        <Text style={styles.text}>3.  Menurut Budianta, drama merupakan alur cerita sastra yang 
        mempertontonkan penampilan fisik secara lisan atau diaolog yang dilakukan antar pemain.
        </Text>
        <Text style={styles.text}>4.  Menurut Tim Matrix Media Literita, drama yaitu sebuah bentuk cerita
         yang menggambarkan kisah kehidupan manusia melalui perilaku tokoh yang dipentaskan.
        </Text>
        <Text style={styles.text}>5.  Menurut Anne Civardi, drama merupakan kisah yang ditampilan melalui
         kata-kata dan diperagakan dengan gerak.
        </Text>

        <Text style={styles.judul1}>
          Unsur Drama
        </Text>
        <Text style={styles.text}>1.  Tema, yaitu ide pokok atau gagasan dari dalam drama yang akan 
        dimainkan.
        </Text>
        <Text style={styles.text}>2.  Alur, yaitu jalan cerita yang harus dilakukan oleh para pemain dari 
        awal hingga akhir cerita.
        </Text>
        <Text style={styles.text}>3.  Tokoh, yaitu pemain atau pemeran dari cerita drama. Tokoh dalam drama 
        biasanya memiliki tokoh utama dan tokoh pembantu atau figuran.
        </Text>
        <Text style={styles.text}>4.  Watak, yaitu sifat yang harus diperankan oleh para pemain drama sesuai 
        dengan cerita yang akan dibawakan. Watak dapat dibedakan menjadi dua yaitu watak protagonis atau
        baik dan watak antagonis atau jahat
        </Text>
        <Text style={styles.text}>5.  Latar, yaitu dapat berupa latar tempat, latar suasana, dan latar waktu 
        yang diceritakan dalam drama.
        </Text>
        <Text style={styles.text}>6.  Amanat, yaitu berupa pesan yang disampaikan oleh pengarang melalui 
        cerita yang ditampilkan oleh para pemain untuk para penonton.
        </Text>

        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Q1')}>
              <Text style={styles.btntxt}>QUIZ</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
    )
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  judul:{
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
    alignSelf: 'center',
  },
  judul1:{
    marginTop: 20,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
    alignSelf: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 15,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 30,
    padding:10,
    width: 250,
    backgroundColor: '#FBC531',
    borderRadius:10
  },
  btntxt:{
    fontSize: 15,
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
})