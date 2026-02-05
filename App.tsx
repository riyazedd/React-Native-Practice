import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Title
			</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <Text style={styles.blueText} onPress={()=>Alert.alert("Text Pressed")}>Press Here!</Text>
         Facilis inventore culpa dolorum! Fugit totam quis a nulla asperiores, dicta quidem labore quisquam ullam accusantium dolorem enim laborum, veritatis reprehenderit ducimus?
      </Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: 'center',
		// justifyContent: 'center',
	},
  title:{
    textAlign: "center",
		fontSize: 50,
  },
  paragraph:{
    textAlign: "justify",
		fontSize: 20,
  },
  blueText:{color:"blue", textDecorationLine:"underline"}
});
