const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'SUB_COUNTER':
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;

    };
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 5 });
store.dispatch({ type: 'DEC_COUNTER' });
store.dispatch({ type: 'SUB_COUNTER', value: 5 });
console.log(store.getState());
