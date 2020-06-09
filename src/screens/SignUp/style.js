import { Directions } from "react-native-gesture-handler";

const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 50,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1


},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 10,
  marginBottom: 10,

},
submitButton:{
  backgroundColor: '#1FCE97',
  borderRadius: 5,
  height: 45,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 10,
},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'black',
},
};
