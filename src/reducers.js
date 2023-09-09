// reducers.js
const initialState = {
    // Define your initial state here
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SOME_ACTION':
            // Handle this action and return a new state
            return { ...state, someValue: action.payload };
        // Add more cases for other actions
        default:
            return state;
    }
};

export default rootReducer;
