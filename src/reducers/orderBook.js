import { 
  ADD_OR_UPDATE_BID,
  ADD_OR_UPDATE_ASK,
  DELETE_BID,
  DELETE_ASK,
} from '../actions/orderBookActions';

const initialState = {
  bids: [],
  asks: [],
};

const orderBookReducer = (state = initialState, action) => {
  console.log('Test data12:   ', action);

  switch(action.type) {
    case ADD_OR_UPDATE_BID: {
      const findMatchingBid = state.bids.find(a => a[0] === action.data.price);

      if (findMatchingBid) {
        findMatchingBid.price = action.data.price;
        findMatchingBid.count = action.data.count;
        findMatchingBid.amount = action.data.amount;
      } else {
        state.bids.push(action.data);
      }
      return {
        ...state,
      };
    }
    case ADD_OR_UPDATE_ASK: {
      const findMatchingAsk = state.asks.find(a => a[0] === action.data.price);

      if (findMatchingAsk) {
        findMatchingAsk.price = action.data.price;
        findMatchingAsk.count = action.data.count;
        findMatchingAsk.amount = action.data.amount;
      } else {
        state.asks.push(action.data);
      }
      return {
        ...state,
      };
    }
    case DELETE_BID: {
      const filteredBids = state.bids.filter(a => a[0] !== action.data.price);
      state.bids = filteredBids;
      return {
        ...state,
      };
    }
    case DELETE_ASK: {
      const filteredAsks = state.asks.filter(a => a[0] !== action.data.price);
      state.asks = filteredAsks;
      return {
        ...state,
      };
    }
    default: 
      return state;
  }
}

export default orderBookReducer;