const POPULATE = 'cart/populate';
const REMOVE = 'cart/remove'
const DECREMENT = 'cart/decrement'

const cartReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case POPULATE:
            if(!nextState[action.itemId]){
                nextState[action.itemId] = {id: action.itemId, count: 0};
            }
            nextState[action.itemId].count += 1
            return nextState;
        case DECREMENT:
            if(nextState[action.itemId]){
                nextState[action.itemId].count -= 1
            }
            if(nextState[action.itemId].count === 0){
                delete nextState[action.itemId]
            }
            return nextState;
        case REMOVE:
            delete nextState[action.itemId]
            return nextState;
        default:
            return state;
    }
}

export const populateCart = (itemId) => {
    return {
        type: POPULATE,
        itemId: itemId
    } 
}

export const removeCardItem = (itemId) => {
    return {
        type: REMOVE,
        itemId: itemId
    }
}

export const decrementCartItem = (itemId) => {
    return {
        type: DECREMENT,
        itemId: itemId
    }
}

export default cartReducer;