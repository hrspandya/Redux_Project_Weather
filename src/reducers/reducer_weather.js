import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      //Never manipulate state..  but always return new state
      //DONT DO ..  state.push([action.payload.data])
      return state.concat([action.payload.data]);

      break;
    default:

  }

  return state;
}
