/*
Binder for valueLink property.
e.g.
-------------------------------------------------------------------------------
Scenarion 1:

import {bind} from 'relative.path.to.this.file';

const TextComponent = (name = 'text', value = '') => {
    <div>
        <input type="text" name={name} valueLink={bind(this, 'message')} />
        <span>{this.state.message}</span>
    </div> 
};

ReactDOM.render(<TextComponent />, document.getElementById('root'));

Scenarion 2:

import {bind} from 'relative.path.to.this.file';

const handler = (value) => {
    // do something in here
    console.log(value);
};

const TextComponent = (name = 'text', value = '') => {
    <div>
        <input type="text" name={name} valueLink={bind(this, 'message', handler)} />
        <span>{this.state.message}</span>
    </div> 
};

ReactDOM.render(<TextComponent />, document.getElementById('root'));
-------------------------------------------------------------------------------*/
function empty(){}
export function bind(container, key, notify = empty) {
    const handleChange = (newValue) => {
        let newState = {};
        newState[key] = newValue;
        container.setState(newState);
        nofity(key, newValue);
    };
    return  {
        value: container.state[key],
        requestChange: handleChange
    };
}; 