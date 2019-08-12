import { SAVE_TICKER_DATA } from '../actions/tickerActions';

const initialState = {
  data: null,
};

const tickerReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_TICKER_DATA:
      return {
        ...state,
        data: action.tickerData,
      };

    default: 
      return state;
  }
}

export default tickerReducer;
