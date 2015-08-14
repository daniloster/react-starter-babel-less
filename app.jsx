import React from 'react';
import ExampleComponent from './component';

class App extends React.Component {
	render() {
		return (
			// other components come here
			<ExampleComponent />
		);
	}
}

React.render(<App />, document.getElementById('app'));
