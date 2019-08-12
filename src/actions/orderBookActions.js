
export const ADD_OR_UPDATE_BID = 'orderBook/ADD_OR_UPDATE_BID';
export const ADD_OR_UPDATE_ASK = 'orderBook/ADD_OR_UPDATE_ASK';
export const DELETE_BID = 'orderBook/DELETE_BID';
export const DELETE_ASK = 'orderBook/DELETE_ASK';

export const addOrUpdateBid = priceData => ({
  type: ADD_OR_UPDATE_BID,
  data: {
    ...priceData,
  },
});

export const addOrUpdateAsk = priceData => ({
  type: ADD_OR_UPDATE_ASK,
  data: {
    ...priceData,
  },
});

export const deleteBid = price => ({
  type: DELETE_BID,
  data: {
    price,
  },
});

export const deleteAsk = price => ({
  type: DELETE_ASK,
  data: {
    price,
  },
});
