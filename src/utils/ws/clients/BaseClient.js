export const defaultConfig = {};
export const wsHost = 'wss://api-pub.bitfinex.com/ws/2';

export class BaseClient {
  ws = null;
  connetivityInterval = null;
  config = {};

  constructor(config = defaultConfig) {
    this.config = config;
    this.connect();
  }

  connect = () => {
    this.ws = new WebSocket(wsHost);
    this.ws.onopen = this.open;
    this.ws.onclose = this.disconnect;
    this.ws.onmessage = (...params) => this.onMessage(...params);
  };

  open = () => {
    if (!this.connetivityInterval) {
      this.connetivityInterval = setInterval(this.handleConnectivity, 3 * 1000);
    }

    if (typeof this.onOpen === 'function') {
      this.onOpen();
    }
  };

  disconnect = () => {
    this.ws.close();
    this.ws = null;
  };

  onMessage = () => {
    throw new Error('Unimplemented function onMessage');
  };

  send = msg => this.ws.send(JSON.stringify(msg));

  handleConnectivity = () => {
    if (this.ws && this.ws.readyState !== this.ws.OPEN) {
      this.disconnect();
    }

    if (!this.ws) {
      this.connect();
    }
  };
}

export default BaseClient;
