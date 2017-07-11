import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
	state={loggedIn: null};

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyCoVNDFDOJgrszahqipKysubtABJZXb3G8",
		    authDomain: "auth-e1749.firebaseapp.com",
		    databaseURL: "https://auth-e1749.firebaseio.com",
		    projectId: "auth-e1749",
		    storageBucket: "auth-e1749.appspot.com",
		    messagingSenderId: "805874817827"
		  });

		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({loggedIn:true});
				console.log(user);
			}
			else{
				this.setState({loggedIn:false});
			}

		});
	}

	renderContent() {
		switch(this.state.loggedIn){
			case true:
				return (
				<CardSection>
				<Button onPress={() => firebase.auth().signOut()}>Log out!</Button>
				</CardSection>
				);
			case false:
				return <LoginForm />
			default:
				<Spinner />
		}
	}

	render()
	{
	return(
		<View>
			<Header header="Authentication" />
			{this.renderContent()}
		</View>
		);
	}
}

export default App;