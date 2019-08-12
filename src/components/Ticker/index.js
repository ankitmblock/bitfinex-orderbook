import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../Row';

const TickerWrapper = styled.header`
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 14px;
  margin: 4px;
`;

const Ticker = ({ tradingPair, data }) => {
  if (!data) {
    return null;
  }

  const isDown = data.DAILY_CHANGE_PERC < 0;
  const price = isDown ? data.BID : data.ASK;
  return (
    <TickerWrapper>
      <Row justify="space-around">
        <div>BTC/USD</div>
        <div>{price}</div>
      </Row>
      <Row justify="space-around">
        <div>VOL {price * data.VOLUME} </div>
        <div>{data.DAILY_CHANGE}({data.DAILY_CHANGE_PERC}%)</div>
      </Row>
      <Row justify="space-around">
        <div>LOW {data.LOW} </div>
        <div>HIGH {data.HIGH} </div>
      </Row>
    </TickerWrapper>
  );
};

Ticker.propTypes = {
  tradingPair: PropTypes.string.isRequired,
};

export default Ticker;
