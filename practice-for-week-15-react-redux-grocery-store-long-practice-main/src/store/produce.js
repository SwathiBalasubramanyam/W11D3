import produce from '../mockData/produce.json'
const POPULATE = 'produce/POPULATE';
const LIKEUNLIKE = 'produce/likeunlike';

const produceReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state))
    
    switch (action.type) {
        case POPULATE:
            action.produce.forEach(element => {
                nextState[element.id] = element
            });

            return nextState;

        case LIKEUNLIKE:
            if(nextState[action.itemId].liked){
                nextState[action.itemId].liked = false
            } else{
                nextState[action.itemId].liked = true
            }
            return nextState;
            
        default:
            return state;
    }
}

export const populateProduce = () => ({
    type: POPULATE,
    produce: produce
})

export const likeUnlikeProduce = (itemId) => ({
    type: LIKEUNLIKE,
    itemId: itemId
})

export default produceReducer;