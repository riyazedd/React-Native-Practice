import { StyleSheet, Text, View, ScrollView, Pressable, Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'

const ImageComponent = () => {
    const onButtonPress=()=> Alert.alert("Button Pressed")
  return (
    <View style={styles.imgContainer}>
            <ScrollView 
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
            <Pressable onPress={onButtonPress}>
              <Image source={require("../../assets/icon.png")} style={styles.image1} />
            </Pressable>
            <TouchableOpacity onLongPress={onButtonPress}>
              <Image source={{uri:"https://picsum.photos/200/300"}} style={styles.image2} />
            </TouchableOpacity>
            <Image source={{uri:"https://picsum.photos/200/300"}} style={styles.image2} />
            </ScrollView>
          </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({
    image1:{
    width:200,
    height:200,
  },
  image2:{
    width:200,
    height:200,
    borderRadius:100
  },
  imgContainer:{
    flexDirection:"row"
  }
})