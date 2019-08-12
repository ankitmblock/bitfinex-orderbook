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
    this.config.onMessage(message.data)
  };
}

export default TickerClient;
