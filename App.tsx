import { Alert, StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity, ScrollView, ActivityIndicator, Modal, ImageBackground, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import ImageComponent from "./src/components/ImageComponent";

export default function App() {
  const [visible,setVisible]=useState(false);
  const [text,setText]=useState("");

  const onModalButtonPress = ()=> setVisible(!visible);

  const onButtonPress=()=> Alert.alert("Button Pressed")
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Title</Text>
			<Text style={styles.paragraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				<Text
					style={styles.blueText}
					onPress={() => Alert.alert("Text Pressed")}
				>
					Press Here!
				</Text>
				Facilis inventore culpa dolorum! Fugit totam quis a nulla asperiores,
				dicta quidem labore quisquam ullam accusantium dolorem enim laborum,
				veritatis reprehenderit ducimus?
			</Text>
      <ActivityIndicator size={"large"}/>
      
      <ImageComponent />

      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur rerum autem ducimus. Sapiente accusamus perferendis voluptate aperiam aut reiciendis tempore qui exercitationem autem quam? Architecto aliquam et officiis veniam.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur rerum autem ducimus. Sapiente accusamus perferendis voluptate aperiam aut reiciendis tempore qui exercitationem autem quam? Architecto aliquam et officiis veniam.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur rerum autem ducimus. Sapiente accusamus perferendis voluptate aperiam aut reiciendis tempore qui exercitationem autem quam? Architecto aliquam et officiis veniam.
      </Text>

      <Button title="Press Me" onPress={onButtonPress} />

      <Button title="Show Modal" onPress={onModalButtonPress}/>

      <Modal visible={visible} animationType="slide" style={{backgroundColor:"tomato"}}>
        <ImageBackground source={require("./assets/icon.png")} style={{flex:1, alignItems:"center", gap:5}}>
          <Text style={styles.title}>Modal is Open </Text>
          <TextInput style={{height:40, width:"80%", borderRadius:4, borderWidth:1}} 
            placeholder="Enter your name"
            keyboardType="default"
            secureTextEntry={false}
            value={text}
            onChangeText={setText}
          />
          <Text>My name is {text}</Text>
        {/* <Button title="Close Modal" onPress={onModalButtonPress}/> */}
        <AntDesign name="close-circle" size={40} color="red" onPress={onModalButtonPress} />
        </ImageBackground>
      </Modal>
      </ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
    padding:5
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	title: {
		textAlign: "center",
		fontSize: 50,
	},
	paragraph: {
		textAlign: "justify",
		fontSize: 20,
	},
	blueText: { color: "blue", textDecorationLine: "underline" },
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
});
