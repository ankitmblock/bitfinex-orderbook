import BaseClient from './BaseClient';

export class TickerClient extends BaseClient {
  onOpen = () => {
    this.send({
      event: 'subscribe',
      channel: 'ticker',
      symbol: 'tBTCUSD'
    });
  };

  onMessage = message => {
    console.log('Ticker Client :', message);
  };
}

export default TickerClient;
