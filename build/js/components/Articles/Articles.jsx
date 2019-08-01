import React from 'react';
export default class IrrelaventName extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			requestedPostsThatWeGotFromGecko: [],
		}
	}

	componentDidMount(){
		const api = 'https://www.geckodesigns.com/wp-json/wp/v2/pages';
		const request = new Request(api);
		// Fetch isn't browser compatible...Might should fix.
		fetch(request)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				};
			}).then(response => {
				this.setState({
					requestedPostsThatWeGotFromGecko: response
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		return (
			<div className='4articles'>
				<h1>Wow! you can now see the articles!</h1>
				If the user is logged in they should see this.
				{this.state.requestedPostsThatWeGotFromGecko.map(article => {
					return (<p>{article.date}</p>);
				})}
			</div>
		);
	}
}
