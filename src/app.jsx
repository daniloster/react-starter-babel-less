import React from 'react';
import ReactDOM from 'react-dom';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ComponentMixins from './util/component.mixin';
import CounterComponent from './counter.component';


class App extends ComponentMixins(PureRenderMixin, LinkedStateMixin) {
    constructor() {
        super();
        this.state = ({ name: 'Newbie' });
    }
     
	render() {
        let example = (<CounterComponent name={this.state.name} />);
		return (
            <div>
                <input type="text" name="username" valueLink={this.linkState('name')} />
                { example }
            </div> 
        ); 
	}
} 

ReactDOM.render(<App />, document.getElementById('app'));
