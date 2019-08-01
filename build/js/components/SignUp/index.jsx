import React from 'react';

export default class SignUp extends React.Component {

	render() {
		const onClick = () => {
			alert('You actually wanna get started?');
			this.props.login();
		}
		return (
			<div className='#sign-up' style={{backgroundColor:'green',}}>
				<table className='#sign-up__form'>
					<tbody>
						<tr>
							<td><h2>Sign Up for Free</h2></td>
							<td><h1>Log In</h1></td>
						</tr>
						<tr>
							<td><input value="First Name*" /></td>
							<td><input value="Last Name*" /></td>
						</tr>
						<tr>
							<td colSpan="2"><input value="Email Address*" /></td>
						</tr>
						<tr>
							<td colSpan="2"><input value="Set A Password*" /></td>
						</tr>
						<tr>
							<td colSpan="2"><input type="submit" value="Get Started" onClick={onClick}/></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
