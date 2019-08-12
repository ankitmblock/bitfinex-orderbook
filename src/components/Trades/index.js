import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TradesWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Trades = ({ tradingPair }) => (
  <TradesWrapper>
    <div>{`Trades-${tradingPair}`}</div>
  </TradesWrapper>
);

Trades.propTypes = {
  tradingPair: PropTypes.string.isRequired,
};

export default Trades;
