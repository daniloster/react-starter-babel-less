import {createStore} from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        default:
            return state
    }
};

// Create a Redux store holding the state of your app. 
// Its API is { subscribe, dispatch, getState }. 
const counterStore = createStore(counter);
 
// You can subscribe to the updates manually, or use bindings to your view layer. 
counterStore.subscribe(() => console.log('Counter:', counterStore.getState()));

export default counterStore;