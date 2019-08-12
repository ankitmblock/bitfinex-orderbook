import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import OrderBook from '../../components/OrderBook'
import Ticker from '../../components/Ticker'
import Trades from '../../components/Trades'
import { TickerClient } from '../../utils/ws';
import { bindActionCreators } from 'redux';
import { onTickerMessage } from '../../actions/tickerActions';

const DashboardWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    new TickerClient({ onMessage: props.onTickerMessage });
  }

  render () {
    const { tradingPair } = this.props;
    return (
      <DashboardWrapper>
        <h1>Dashboard</h1>
        <OrderBook tradingPair={'tBTCUSD'} />
        <Ticker tradingPair={'tBTCUSD'}/>
        <Ticker tradingPair={'tBTCUSD'}/>
      </DashboardWrapper>
    );
  }
}

Dashboard.propTypes = {
  tradingPair: PropTypes.string.isRequired,
  onTickerMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onTickerMessage,
}, dispatch);

const reduxConnected = connect(
  null,
  mapDispatchToProps,
)(Dashboard);

export default reduxConnected;
