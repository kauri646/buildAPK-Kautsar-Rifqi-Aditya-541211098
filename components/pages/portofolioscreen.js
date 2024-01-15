import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import CustomProject from '../props/customproject';

const windowWidth = Dimensions.get('window').width;

const PortfolioScreen = () => {
  const [typedName, setTypedName] = useState('');
  const name = 'Kautsar Rifqi Aditya';

  const handleButtonPress = () => {
    Linking.openURL('https://wa.me/6282133454277');
  };

  const startTypewriter = () => {
    let index = 0;

    const typeWriter = () => {
      if (index < name.length) {
        setTypedName((prevName) => prevName + name[index]);
        index++;
        setTimeout(typeWriter, 100);
      } else {
        index = 0;
        setTypedName('');
        setTimeout(typeWriter, 1000);
      }
    };
    typeWriter();
  };

  useEffect(() => {
    startTypewriter();
    return () => clearTimeout();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require('../../assets/pdip.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>My Name Is</Text>
      <Text style={styles.name}>{typedName}</Text>
      <Text style={styles.head}>My Project</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <CustomProject projectImage={require('../../assets/proj1.png')} projectName="Hotel App"/>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Contact me</Text>
      </TouchableOpacity>
      <Text style={styles.bottom}>Kautsar Rifqi Aditya | XII RPL 3 | 20</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    height: 500, 
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'semibold',
    marginTop: 10,
  },
});

export default PortfolioScreen;
