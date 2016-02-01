import React from 'react';

class CounterComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: 0 };
	}
  
	render() {
		return <section>
		<h2>Hello,  {this.props.name}. I am an example component.</h2>
		<span className="main">You have already clicked the button {this.state.clicked}x.</span>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
		</section>;
	}

	handleClick() {
		this.setState({ clicked: this.state.clicked + 1 });
	}
}

export default CounterComponent;