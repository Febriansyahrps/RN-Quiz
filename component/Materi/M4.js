import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';


export default class M4 extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
        <Text style={styles.judul}>
          Jenis-Jenis Drama Berdasarkan Sarana
        </Text>
        <Text style={styles.text}>
          1.  Drama panggung, yaitu drama yang dilakukan atau dipentaskan diatas panggung sepenuhnya.
        </Text>
        <Text style={styles.text}>
          2.  Drama radio, yaitu drama yang hanya bisa didengar.
        </Text>
        <Text style={styles.text}>
          3.  Drama televisi, yaitu drama yang memiliki kemiripan dengan drama panggung, hanya saja drama ini 
          berada di televisi.
        </Text>
        <Text style={styles.text}>
          4.  Dram film, yaitu drama yang biasanya menggunakan layar lebar sebagai medianya.
        </Text>
        <Text style={styles.text}>
          5.  Drama wayang, yaitu drama yang biasanya diiringi dengan pagelaran wayang.
        </Text>
        <Text style={styles.text}>
          6.  Drama boneka, yaitu pemeran drama ini tidak dimainkan oleh aktor secara langsung, melainkan 
          menggunakan media boneka untuk pemerannya.
        </Text>
        
        <Text style={styles.judul1}>
          Jenis-Jenis Drama Berdasarkan Keberadaan Teks Naskah
        </Text>
        <Text style={styles.text}>
          1.  Drama tradisional, yaitu drama yang dilakukan secara otodidak atau tidak menggunakan naskah.
        </Text>
        <Text style={styles.text}>
          2.  Drama modern, yaitu drama yang dilakukan dengan adanya sebuah naskah.
        </Text>

        <Text style={styles.judul1}>
          Jenis-Jenis Drama Berdasarkan Kuantitas Cakapannya
        </Text>
        <Text style={styles.text}>
          1.  Pantomim, yaitu drama tanpa kata-kata.
        </Text>
        <Text style={styles.text}>
          2.  Minikata, yaitu drama yang menggunakan sedikit sekali kata-kata.
        </Text>
        <Text style={styles.text}>
          3.  Dialog monolog, yaitu drama yang menggunakan banyak kata-kata.
        </Text>

        <Text style={styles.judul1}>
          Bentuk-Bentuk Lainnya
        </Text>
        <Text style={styles.text}>
          1.  Drama absurd, yaitu drama yang sengaja mengabaikan atau melanggar konversi alur, penokohan, 
          tematik.
        </Text>
        <Text style={styles.text}>
          2.  Drama baca, naskah drama yang hanya cocok untuk dibaca, bukan dipentaskan.
        </Text>
        <Text style={styles.text}>
          3.  Drama borjuis, drama yang bertema tentang kehidupan kaum bangsawan (muncul abad ke-18).
        </Text>
        <Text style={styles.text}>
          4.  Drama domestik, drama yang menceritakan kehidupan rakyat biasa.
        </Text>
        <Text style={styles.text}>
          5.  Drama duka, yaitu drama yang khusus menggambarkan kejahatan atau keruntuhan tokoh utama
        </Text>
        <Text style={styles.text}>
          6.  Drama liturgis, yaitu drama yang pementasannya digabungkan dengan upacara kebaktian gereja 
          (di Abad Pertengahan).
        </Text>
        <Text style={styles.text}>
          7.  Drama satu babak, yaitu lakon yang terdiri dari satu babak, berpusat pada satu tema dengan 
          sejumlah kecil pemeran gaya, latar, serta pengaluran yang ringkas.
        </Text>
        <Text style={styles.text}>
          8.  Drama rakyat, yaitu drama yang timbul dan berkembang sesuai dengan festival rakyat yang ada 
          (terutama di pedesaan).
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