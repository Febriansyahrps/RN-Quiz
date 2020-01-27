import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';


export default class M2 extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
        <Text style={styles.judul}>
          Ciri-ciri drama
        </Text>
        <Text style={styles.text}>
          1.  Memiliki konflik
        </Text>
        <Text style={styles.text}>
          2.  Dalam drama pasti ada aksi yang harus dimainkan
        </Text>
        <Text style={styles.text}>
          3.  Harus dilakonkan/diperagakan
        </Text>
        <Text style={styles.text}>
          4.  Waktu drama harus kurang dari 3 jam
        </Text>
        <Text style={styles.text}>
          5.  Tidak ada pengulangan dalam satu masa
        </Text>
        
        <Text style={styles.judul1}>
        Struktur Teks Drama
        </Text>
        <Text style={styles.text}>
          1.  Prolog merupakan bagian awal dari sebuah drama. Prolog biasanya digunakan untuk menceritakan 
          gambaran drama yang akan dimainkan secara umum.
        </Text>
        <Text style={styles.text}>
          2.  Dialog merupakan bagian yang paling penting dalam sebuah drama. Dialog berfungsi sebagai 
          penghantar komunikasi antar tokoh.
        </Text>
        <Text style={styles.text}>
          3.  Epilog merupakan bagian akhir atau bagian penutup dari sebuah drama. Epilog biasanya berisi 
          tentang kesimpulan dan pesan yang bisa diambil dari cerita drama tersebut.
        </Text>

        <Text style={styles.judul1}>
        Tujuan Drama
        </Text>
        <Text style={styles.text}>
          1.  Sebagai sarana hiburan untuk masyarakat, baik kalangan pelajar maupun kalangan umum.
        </Text>
        <Text style={styles.text}>
          2.  Memperoleh pengetahuan tentang seni teater
        </Text>
        <Text style={styles.text}>
          3.  Sebagai media pengembangan bakat mengenai estetika
        </Text>
        
        <Text style={styles.judul1}>
        Manfaat Drama
        </Text>
        <Text style={styles.text}>
          1.  Dapat meningkatkan rasa percaya diri seseorang dan meningkatkan nilai sosial seseorang
        </Text>
        <Text style={styles.text}>
          2.  Memberikan kesempatan untuk memberikan kreasi dalam drama
        </Text>
        <Text style={styles.text}>
          3.  Dapat mengontrol emosi dengan baik
        </Text>
        <Text style={styles.text}>
          4.  Dapat lebih menghargai pendapat orang lain dengan lebih baik
        </Text>
        <Text style={styles.text}>
          5.  Dalam dunia pendidikan drama dapat digunakan sebagai sarana edukasi yang baik dan menyenangkan.
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