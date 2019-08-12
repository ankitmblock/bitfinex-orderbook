import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import OrderBook from '../../components/OrderBook'
import Ticker from '../../components/Ticker'
import Trades from '../../components/Trades'
import { TickerClient } from '../../utils/ws';
import { OrderBookClient } from '../../utils/ws';
import { bindActionCreators } from 'redux';
import { onTickerMessage } from '../../actions/tickerActions';
import { 
  addOrUpdateBid,
  addOrUpdateAsk,
  deleteBid,
  deleteAsk,
} from '../../actions/orderBookActions';

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
    new OrderBookClient({ 
      addOrUpdateBid: props.addOrUpdateBid,
      addOrUpdateAsk: props.addOrUpdateAsk,
      deleteBid: props.deleteBid,
      deleteAsk: props.deleteAsk,
    });
  }

  render () {
    const { tradingPair, asks, bids, tickerData } = this.props;
    return (
      <DashboardWrapper>
        <h1>Dashboard</h1>
        <OrderBook 
          tradingPair={tradingPair} 
          bids={bids} 
          asks={asks}
        />
        <Ticker data={tickerData} tradingPair={tradingPair}/>
        <Trades tradingPair={tradingPair}/>
      </DashboardWrapper>
    );
  }
}

Dashboard.propTypes = {
  tradingPair: PropTypes.string.isRequired,
  onTickerMessage: PropTypes.func.isRequired,
  bids: PropTypes.array.isRequired,
  asks: PropTypes.array.isRequired,
  tickerData: PropTypes.object,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onTickerMessage,
  addOrUpdateBid,
  addOrUpdateAsk,
  deleteBid,
  deleteAsk,
}, dispatch);

const mapStateToProps = (state) => {
  return {
    bids: state.orderBook.bids.sort((a, b) => {
        return a.price >= b.price ? -1 : 1
    }),
    asks: state.orderBook.asks.sort((a, b) => {
      return a.price <= b.price ? -1 : 1
    }),
    tickerData : state.ticker.data,
  };
}

const reduxConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default reduxConnected;
