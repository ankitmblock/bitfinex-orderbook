import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TickerWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Ticker = ({ tradingPair }) => (
  <TickerWrapper>
    <div>{`Ticker-${tradingPair}`}</div>
  </TickerWrapper>
);

Ticker.propTypes = {
  tradingPair: PropTypes.string.isRequired,
};

export default Ticker;
