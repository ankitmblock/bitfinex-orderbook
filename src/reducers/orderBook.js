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
      const findMatchingBid = state.bids.find(a => a.price === action.data.price);
      let bids = [ ...state.bids ];

      if (findMatchingBid) {
        bids = state.bids.map(bid => {
          return bid.price === action.data.price ? {
            count: action.data.count,
            amount: action.data.amount,
            price: action.data.price
          } : bid;
        })
      } else {
        bids.push(action.data);
      }
      return {
        ...state,
        bids,
      }
    }
    case ADD_OR_UPDATE_ASK: {
      const findMatchingAsk = state.asks.find(a => a.price === action.data.price);
      let asks = [ ...state.asks ];

      if (findMatchingAsk) {
        asks = state.asks.map(ask => {
          return ask.price === action.data.price ? {
            count: action.data.count,
            amount: action.data.amount,
            price: action.data.price
          } : ask;
        })
      } else {
        asks.push(action.data);
      }
      return {
        ...state,
        asks,
      }
    }
    case DELETE_BID: {
      console.log('DELETE_BID-----------------------      :            ', action.data.price);

      const filteredBids = state.bids.filter(a => a.price !== action.data.price);
      return {
        ...state,
        bids: filteredBids,
      };
    }
    case DELETE_ASK: {
      console.log('DELETE_ASK-----------------------      :            ', action.data.price);
      const filteredAsks = state.asks.filter(a => a.price !== action.data.price);
      return {
        ...state,
        asks: filteredAsks,
      };
    }
    default: 
      return state;
  }
}

export default orderBookReducer;