import { Text, View, Image, Pressable, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loginscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/logo-01.png')}
      />
      <Text style={styles.title}>Welcome Back !</Text>
      <Text style={styles.paragraph}>Login untuk melanjutkan</Text>
      <TextInput
        style={styles.input}
        value={"Email"}
      />
      <TextInput
        style={styles.input}
        value={"Password"}
      />
      <Text style={styles.forgot}>Lupa password?</Text>
      <Pressable style={styles.tombol}>
        <Text style={styles.log} onPress={()=> navigation.navigate('Portofolio')}>Login</Text>
      </Pressable>
      <Text style={styles.atau}>
        Belum punya akun?{' '}
        <Text style={{ fontSize: 15, color: 'red' }}onPress={()=> navigation.navigate('Register')} >
          Daftar
        </Text>
      </Text>
    </View>
  );
}

export default Loginscreen;


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
    marginTop: -15,
    marginBottom: 5
  },
   title: {
    marginTop: -15,
    color: '#FF7D1F',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  paragraph: {
   color: '#414042',
   fontSize: 12,
    marginBottom: 5,
  },
  log:{
    color: '#ffffff',
   fontSize: 13,
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
  forgot: {
    fontSize: 10,
    marginBottom: 30,
    color: '#414042'
  },
  atau: {
    fontSize: 12,
    marginTop:10,
    marginBottom: 10,
    color: '#414042'
  },
  tombol:{
    backgroundColor: '#FF7D1F',
    color: '#ffffff',
    height:30,
    width: 285,
    justifyContent:'center',
    borderRadius: 5
  }
});

