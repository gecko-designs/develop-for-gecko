import React from 'react';
import SignUp from '../SignUp';
import Articles from '../Articles/Articles';

export default class Gecko extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: null,
		}
	}
	clickMe = () => {
		this.setState({
			login: true
		})
	}
	render() {
		console.log(this.state);
		return (
			<div className='gecko'>
				Oh You Shouldn't Use Me. I'm Just a Sample and I'm full of bad practices and bugs.
				<SignUp login={() => this.clickMe()}/>
				{this.state.login &&
					<Articles />
				}
			</div>
		);
	}
}
