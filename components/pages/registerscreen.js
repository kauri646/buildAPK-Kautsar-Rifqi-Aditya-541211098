import React from 'react';
import { Text, View, Image, Pressable, StyleSheet, TextInput, Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Registerscreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image
        style={styles.img}
        source={require('../../assets/logo-01.png')}
      />
      <Text style={styles.title}>Daftar</Text>
      <Text style={styles.paragraph}>Daftarkan diri anda</Text>
      <TextInput
        style={styles.input}
        value={"Nama"}
      />
      <TextInput
        style={styles.input}
        value={"Email"}
      />
      <TextInput
        style={styles.input}
        value={"Password"}
      />
      <TextInput
        style={styles.input}
        value={"Confrim Password"}
      />
      <Pressable style={styles.tombol} onPress={()=> navigation.navigate('Portofolio')}>
        <Text style={styles.log}>Daftar</Text>
      </Pressable>
    </View>
  );
}

export default Registerscreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: '#FFF3DA'
    },
   img: {
    height: 250,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -70,
    marginBottom: 5
  },
   title: {
    marginTop: -65,
    color: '#FF7D1F',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  paragraph: {
   color: '#414042',
   fontSize: 12,
   textAlign: 'center',
   marginBottom: 5,
  },
  log:{
   color: '#ffffff',
   fontSize: 13,
   textAlign: 'center',
   marginBottom: 5,
  },
  input: {
    borderColor:'#FF7D1F',
    color:'#414042',
    width : 285,
    height: 40,
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  tombol:{
    backgroundColor: '#FF7D1F',
    color: '#ffffff',
    height:30,
    width: 285,
    textAlign: 'center',
    justifyContent:'center',
    borderRadius: 5,
    marginTop: 10,
  }
});