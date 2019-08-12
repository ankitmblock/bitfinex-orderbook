import BaseClient from './BaseClient';

export class OrderBookClient extends BaseClient {
  onOpen = () => {
    this.send({
      event: 'subscribe', 
      channel: 'book', 
      symbol: 'tBTCUSD',
      prec: 'P0',
      freq: 'F1',
      len: '25', 
    });
  };

  savePriceLevelData = (priceData) => {
    if (priceData.length === 3) {
      const pp = {
        price: priceData[0],
        count: priceData[1],
        amount: Math.abs(priceData[2]),
      };
      
      if (pp.count > 0) {
        if (priceData[2] > 0) {
          this.config.addOrUpdateBid(pp);
        } else {
          this.config.addOrUpdateAsk(pp);
        }
      } else if (pp.count === 0) {
        if (priceData[2] === 1) {
          this.config.deleteBid(pp);
        } else {
          this.config.deleteAsk(pp);
        }
      }
    }
  }

  onMessage = message => {
    const data = JSON.parse(message.data);

    if (data[1] && Array.isArray(data[1][0])) {
      data[1][0].forEach(priceLevelData => this.savePriceLevelData(priceLevelData));
    } else if (data[1] && Array.isArray(data[1])) {
      this.savePriceLevelData(data[1]);
    }
  };
}

export default OrderBookClient;
