import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OrderBookWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OrderBook = ({ tradingPair }) => (
  <OrderBookWrapper>
    <div>{`OrderBook-${tradingPair}`}</div>
  </OrderBookWrapper>
);

OrderBook.propTypes = {
  tradingPair: PropTypes.string.isRequired,
};

export default OrderBook;
