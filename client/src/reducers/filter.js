import { FILTER_SELECTED, FILTER_RESET } from '../actions/types';
import _ from 'lodash';

const filterState = {

};


// Reset or SetUp the Filter 
const filterSelectorInit = filterValues => {
    // Deep Copy the filterValues in other memory
    const filterSelector = _.cloneDeep(filterValues);

    for(const tag in filterSelector) {
        for(const option in filterSelector[tag])
            // Put all the values to empty array
            filterSelector[tag][option] = []
    }
    return filterSelector
}

export default (state = filterState, action) => {

    switch(action.type){
        case FILTER_SELECTED:
            // payload is an array in format ["mainTagName", "subTagName", "value"]

            // We can not modify the previous state in redux 
            let newState = _.cloneDeep(state);

            // Get the tagName which the user selected
            const mainTagName = action.payload[0];
            // SubTag Name
            const subTagName = action.payload[1];
            // Get the value which the user selected
            const selectedValue = action.payload[2];

            // If the value in the subtag has already in the array, Remove it
            if (newState[mainTagName][subTagName].includes(selectedValue)) 
                _.remove(newState[mainTagName][subTagName], value => value === selectedValue)
            // Otherwise add the value in to the array
            else 
                newState[mainTagName][subTagName].push(selectedValue)

            // Return the new state of the filter object
            return newState;

        case FILTER_RESET:
            return filterSelectorInit(action.payload);
        default:
            return state
    }
}