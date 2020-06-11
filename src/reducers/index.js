


const commentReducer = (state = [], action) => {
    if(action.type === 'ADD_COMMENT') {
        console.log('tyuytutyty', state, action)
        return [...state, action.payload];
    } else if(action.type === 'DELETE_COMMENT') {
        return state.filter(item => item!==action.payload)
    }
    return state
}

export default commentReducer;
