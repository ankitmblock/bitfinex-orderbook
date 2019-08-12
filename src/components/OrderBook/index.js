import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OrderBookTable from './OrderBookTable'

const OrderBookWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-height: 60%;
  overflow-y: auto;
  width: 60%;
`;

const OrderBook = ({ tradingPair, bids, asks }) => (
  <OrderBookWrapper>
    <OrderBookTable asks={asks} bids={bids}/>
  </OrderBookWrapper>
);

OrderBook.propTypes = {
  tradingPair: PropTypes.string.isRequired,
  bids: PropTypes.array.isRequired,
  asks: PropTypes.array.isRequired,
};

export default OrderBook;
