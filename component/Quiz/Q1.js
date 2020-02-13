import React from 'react';
import { StyleSheet,TouchableOpacity, View, Text } from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text>1.Drama adalah sebuah kisah yang diceritakan melalui kata-kata dan gerakan. Pengertian drama tersebut dikemukakan oleh...</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>
          a. Anne Civardi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>
          b. Anne Civardi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>
          c. Anne Civardi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>
          d. Anne Civardi
          </Text>
        </TouchableOpacity>
        
      </View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 10,
  },
  txt: {
    alignSelf: "center",
    marginTop: 14,
  }


})