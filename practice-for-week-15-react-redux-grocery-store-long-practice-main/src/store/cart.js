const POPULATE = 'cart/populate';

const cartReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case POPULATE:
            if(!nextState[action.itemId]){
                nextState[action.itemId] = {id: action.itemId, count: 0};
            }
            nextState[action.itemId].count += 1
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

export default cartReducer;