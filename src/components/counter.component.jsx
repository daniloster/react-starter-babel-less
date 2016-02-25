import React from 'react';

const CounterComponent = ({name, value, onCount}) => {
    return (
        <section>
            <h2>Hello, {name}. I am an example component.</h2>
            <span className="main">You have already clicked the button {value}x.</span>
            <button onClick={onCount}>Count</button>
        </section>
    );
};
CounterComponent.name = "CounterComponent";

export default CounterComponent;