
export const ON_TICKER_MSG = 'ticker/ON_TICKER_MSG';

export const onTickerMessage = message => ({
  type: ON_TICKER_MSG,
  message,
});
