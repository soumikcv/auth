import React , { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common'

class LoginForm extends Component{
	state = { text: '' };


	render() {
		return (
			<Card>
				<CardSection>
					<TextInput
					value = {this.state.text}
					onChangeText={text => this.setState({ text })}
					style={{ height: 50, width: 100 }} />
				</CardSection>
				
				<CardSection />

				<CardSection>
				<Button>Login!</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;