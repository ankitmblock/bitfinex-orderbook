import { tickerApiSequence, tickerRequiredFields } from '../../constants/apiConstants';

export const parser = data => (
  tickerRequiredFields.reduce((acc, nextKey) => ({
    ...acc,
    [nextKey]: data[tickerApiSequence.indexOf(nextKey)],
  }), {})
);

export default parser;
