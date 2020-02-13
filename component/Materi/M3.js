import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Image } from 'react-native';


export default class M3 extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
        <Text style={styles.judul}>
          Jenis-Jenis Drama Berdasarkan Penyajian Kisah
        </Text>

        <Image source={require('./../Image/dramatragedi.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          1.  Tragedi, yaitu drama yang melukiskan cerita penuh kesedihan dan kemalangan. Contoh drama jenis 
          tragedi yang terkenal adalah Tamburlaine, Doctor Faustus, Hamlet, Othello, dan Macbeth.
        </Text>

        <Image source={require('./../Image/dramakomedi.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          2.  Komedi, yaitu drama yang bersifat menghibur dengan unsur jenaka di dalamnya.Salah satu contoh 
          drama komedi yang terkenal yaitu berjudul A Midsummer Night’s Dream garapan William Shakespeare.
        </Text>

        <Image source={require('./../Image/dramatragedikomedi.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          3.  Tragekomedi, yaitu jenis drama yang merupakan penggabungan antara komedi dan tragedi. Salah 
          satu contoh jenis drama tragekomedi yaitu berjudul The Merchant of Venice garapan William Shakespeare.
        </Text>

        <Image source={require('./../Image/dramamusikal.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          4.  Opera (Drama Musikal), yaitu drama yang percakapannya diiringi musik atau melodi. Contoh drama 
          musikal terkenal adalah West Side Story, The Fantasticks, Hair, A Chorus Line, Les Misérables, The Phantom of the Opera, Rent, The Producers dan Wicked.
        </Text>

        <Image source={require('./../Image/melodrama.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          5.  Melodrama, yaitu drama dengan cerita yang sangat sentimental. Salah satu melodrama yang terkenal 
          yaitu berjudul Still Life garapan Noel Coward.
        </Text>

        <Image source={require('./../Image/dramafarce.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          6.  Farce, yaitu drama yang berupa dagelan, tetapi tidak keseluruhan adegan dalam farce sama 
          dengan dagelan. Salah satu contoh drama farce yang terkenal yaitu berjudul The Importance of Being 
          Earnest garapan Oscar Wilde.
        </Text>

        <Image source={require('./../Image/dramatablo.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          7.  Tablo, yaitu drama yang tokohnya lebih mengutamakan gerak, para tokoh tidak melakukan dialog 
          hanya melakukan berbagai gerakan saja. Pementasan tablo biasanya hanya dilakukan di 
          universitas-universitas seni dan jurusan teater. Jarang ada pementasan jenis tablo yang terkenal.
        </Text>

        <Image source={require('./../Image/sendratari.jpg')} style={styles.img1}/>
        <Text style={styles.text}>
          8.  Sendratari, yaitu drama yang menggabungkan seni tari dan seni drama dalam satu pementasan. 
          Contoh drama tari yang terkenal di masyarakat Indonesia yaitu : Ramayana, Mahabarata, dan Panji.
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
  img1: {
    marginTop: 25,
    alignSelf: 'center',
    height: 100,
    width: '75%',
  }, 
})