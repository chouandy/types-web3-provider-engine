declare module 'web3-provider-engine/subproviders/rpc' {
  class RpcSubprovider {
    constructor(opts: { rpcUrl?: string });
  }

  namespace RpcSubprovider {}

  export = RpcSubprovider;
}
