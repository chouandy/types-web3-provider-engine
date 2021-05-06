declare module 'web3-provider-engine/subproviders/websocket' {
  class WebSocketSubprovider {
    constructor(opts: { rpcUrl?: string });
  }

  namespace WebSocketSubprovider {}

  export = WebSocketSubprovider;
}
