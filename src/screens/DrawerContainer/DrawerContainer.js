import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default class DrawerContainer extends React.Component {
  render() {
    
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require("../../../assets/icons/home.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATEGORIES"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("Categories");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require("../../../assets/icons/search.png")}
            onPress={() => {
              navigation.navigate("Search");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SIGN UP"
            source={require("../../../assets/icons/signUp.png")}
            onPress={() => {
              navigation.navigate("SignUp");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="LOG IN"
            source={require("../../../assets/icons/logIn.png")}
            onPress={() => {
              navigation.navigate("Login");
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
