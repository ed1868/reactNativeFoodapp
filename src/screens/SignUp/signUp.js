import React, { Component } from "react";

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

export default class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Create an Account</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="First Name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Last Name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Email"
                placeholderColor="#c4c3cb"
                autoCompleteType="email"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Phone Number"
                keyboardType="number-pad"
                placeholderColor="#c4c3cb"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
             
                autoCompleteType="tel"
                maxLength={10}
                style={styles.loginFormTextInput}
            
              />
              <Button
                buttonStyle={styles.submitButton}
                onPress={() => this.onLoginPress()}
                title="Submit"
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
}
