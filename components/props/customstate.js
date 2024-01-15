import React, {useState} from 'react';
import { View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomState = (props) => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  return(
      <View>
        <View>
            <View style={{marginHorizontal:'5%', marginVertical:'5%'}}>

            <View style={{flexDirection:"row"}}>

              <View style={{marginTop: -30, flex:1, justifyContent: 'center'}}>
                <Pressable onPress={() => setLike(like + 1)}>
                  <Icon name="thumbs-up" color="black" />
                </Pressable>
                <Text style={{color:'black'}}>{ like }</Text>
              </View>

              <View style={{marginTop: -30, marginLeft: -100, flex:1, justifyContent: 'center'}}>
                <Pressable onPress={() => setDislike(dislike + 1)}>
                    <Icon name="thumbs-down" color="black" />
                </Pressable>
                <Text style={{color:'black'}}>{ dislike }</Text>
              </View>

            </View>
          </View>
        </View>
      </View>
  )
}

export default CustomState;