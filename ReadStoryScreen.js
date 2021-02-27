import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
  } from 'react-native';
  
  
  export default class ReadStoryScreen extends React.Component() {
      render(){
          return(
              <View style={styles.container}>
                  <Text>Read a Story</Text>
              </View>
          )
      }
  }

const styles = StyleSheet.create({

    container:{
        textAlign: 'center',
        flex: 2,
        
    }
})