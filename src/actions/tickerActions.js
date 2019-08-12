
export const ON_TICKER_MSG = 'ticker/ON_TICKER_MSG';
export const SAVE_TICKER_DATA = 'ticker/SAVE_TICKER_DATA';

export const onTickerMessage = message => ({
  type: ON_TICKER_MSG,
  message,
});

export const saveTickerData = tickerData => ({
  type: SAVE_TICKER_DATA,
  tickerData,
});
