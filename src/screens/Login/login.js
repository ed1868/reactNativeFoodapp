import React, { Component } from "react"
import styles from "./style";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import MenuImage from '../../components/MenuImage/MenuImage';
import * as Facebook from "expo-facebook";
const appId = "283152059742151";
export default class LoginScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Sign In',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Recipe Grub</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={ this.updateText = e => {console.log(e)}} 
                
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangePW = { this.secureLoging = e => {console.log(e)}}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Login"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.onFbLoginPress()}
                title="Login with Facebook"
                // color="#3897f1"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
  onLoginPress() {
    console.log(`app Id: ${appId}`);
  }
  async onFbLoginPress() {
    // Facebook . api ( '/ {user-id} / friends' , 'GET' , {}, function ( response ) { // Insert your code here } );
    try {
      await Facebook.initializeAsync(appId);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        console.log(type);
        console.log("entro");
        console.log(expires, permissions);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
}
