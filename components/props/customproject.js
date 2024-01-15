import React, { useState } from 'react';
import { View, Pressable, Text, Image, Linking } from 'react-native';

import CustomState from './customstate';

const CustomProject = (props) => {
  return (
    <View>
      <View style={{ marginHorizontal: '5%', alignItems: 'center' }}>
        <Image
          source={props.projectImage}
          style={{ width: 280, height: 300 }}
        />
      </View>
      <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
        <View style={{ flex: 8 }}>
          <Text
            style={{
              color: 'black',
              marginHorizontal: '5%',
              fontWeight: '500',
              fontSize: 24,
              letterSpacing: -1,
            }}>
            {props.projectName}
          </Text>
        </View>

        <View style={{ flex: 1, marginVertical: '2%' }}>
          <Text style={{ color: 'black', fontSize: 10, letterSpacing: -1 }}>
           {props.projectYear}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: '5%' }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: 'black',
              fontSize: 10,
              letterSpacing: -1,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              width: 60,
            }}>
            {props.projectType1}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: 'black',
              fontSize: 10,
              letterSpacing: -1,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              width: 60,
            }}>
            {props.projectType2}
          </Text>
        </View>

        <View style={{ flex: 1 }}></View>

        <View style={{ flex: 1 }}></View>
      </View>

      <View style={{ marginHorizontal: '5%', marginVertical: '5%' }}>
        <Text style={{ color: 'black', lineHeight: 15 }}>
        {props.projectDesc}
        </Text>
      </View>

      <View style={{ marginHorizontal: '5%', marginBottom: '10%' }}>
        <View style={{}}>
          <View style={{ flexDirection: 'row' }}>
            
            <View style={{ flex: 1 }}>
              <CustomState />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomProject;
