import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm'
class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
    apiKey: "AIzaSyCoVNDFDOJgrszahqipKysubtABJZXb3G8",
    authDomain: "auth-e1749.firebaseapp.com",
    databaseURL: "https://auth-e1749.firebaseio.com",
    projectId: "auth-e1749",
    storageBucket: "auth-e1749.appspot.com",
    messagingSenderId: "805874817827"
  });
	}
	render()
	{
	return(
		<View>
			<Header header="Authentication" />
			<LoginForm />
		</View>
		);
	}
}

export default App;