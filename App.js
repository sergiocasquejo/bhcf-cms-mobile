import React, {Component} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { SignedIn, SignedOut, createRootNavigator } from './src/services/routes';
import { isSignedIn } from './src/services/auth';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }
  
  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({signedIn: res, checkedSignIn: true }))
      .catch(error => alert("An error occured"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />
  }
}
