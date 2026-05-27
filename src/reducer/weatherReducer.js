import { SET_WEATHER, SET_MESSAGE } from "../actions/weatherActions.js";
/*
*
*/
export const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state, 
                weatherInfo: action.payload
            };
        case SET_MESSAGE:
            return { 
                ...state, 
                message: action.payload 
            };

        default:
            return state;
    }
};