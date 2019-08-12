import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OrderBook from '../../components/OrderBook'
import Ticker from '../../components/Ticker'
import Trades from '../../components/Ticker'

const DashboardWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dashboard = ({ tradingPair }) => (
  <DashboardWrapper>
    <h1>Dashboard</h1>
    <OrderBook tradingPair={'tBTCUSD'} />
    <Ticker tradingPair={'tBTCUSD'}/>
    <Ticker tradingPair={'tBTCUSD'}/>
  </DashboardWrapper>
);

Dashboard.propTypes = {
  tradingPair: PropTypes.string.isRequired,
};

export default Dashboard;
