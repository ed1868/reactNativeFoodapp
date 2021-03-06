import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import DrawerActions from "react-navigation";
import { getCategoryName } from "../../data/MockDataAPI";
import Login from "../Login/login";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("SIEMPRE PRIMERO");
    console.log(this.props.navigation.state.params.loggedIn);
    let LoggedIn = this.props.navigation.state.params.loggedIn

    if (LoggedIn == false) {
      console.log("YOU NEED TO LOG IN BRUH");
      this.props.navigation.navigate("Login",LoggedIn);
    }

    // setTimeout(() => {
    //     this.props.navigation.navigate('Home');
    // }, 10000);
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });

  onPressRecipe = (item) => {
    this.props.navigation.navigate("Recipe", { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    //  console.log(recipes[0]);
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    );
  }
}
