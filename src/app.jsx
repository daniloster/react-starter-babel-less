import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CounterComponent from './components/counter.component';
import counterStore from './stores/counter.store';
import {bind} from './util/input.binder';

// https://github.com/reactjs/react-router-redux

class App extends Component {
    constructor(props = {}) {
        super(props);
        this.state = ({ name: 'Newbie' });
        counterStore.subscribe(render);
    }
     
	render() {
        const {name} = this.state;
        let counter = (<CounterComponent 
            name={name} 
            value={counterStore.getState()} 
            onCount={() => {counterStore.dispatch({type: 'INCREMENT'});}}/>
        );
		return (
            <div>
                <input type="text" name="username" 
                    valueLink={bind(this, 'name')} />
                { counter }
            </div> 
        ); 
	}
}

const rootApp = document.getElementById('app');
function render() {
    ReactDOM.render(
        <App />, 
        rootApp
    );
};

render();