import { Alert, StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  
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
      <View style={styles.imgContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
        <Pressable onPress={onButtonPress}>
          <Image source={require("./assets/icon.png")} style={styles.image1} />
        </Pressable>
        <TouchableOpacity onLongPress={onButtonPress}>
          <Image source={{uri:"https://picsum.photos/200/300"}} style={styles.image2} />
        </TouchableOpacity>
        <Image source={{uri:"https://picsum.photos/200/300"}} style={styles.image2} />
        </ScrollView>
      </View>

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
