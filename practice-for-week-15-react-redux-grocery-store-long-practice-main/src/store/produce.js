import produce from '../mockData/produce.json'
const POPULATE = 'produce/POPULATE'

const produceReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state))
    
    switch (action.type) {
        case POPULATE:
            action.produce.forEach(element => {
                nextState[element.id] = element
            });

            return nextState;
        default:
            return state;
    }
}


export const populateProduce = () => ({
    type: POPULATE,
    produce: produce
})

export default produceReducer;