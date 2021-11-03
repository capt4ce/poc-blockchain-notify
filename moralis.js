import Moralis from 'moralis/node.js';

export class MoralisNotify {
  constructor(serverUrl, appId) {
    Moralis.start({ serverUrl, appId });
  }

  async registerAddresses(addresses) {}

  /**
   * 
   * @param {*} callback 
   * 
   * callback data example:
   * ParseObject {
        id: '2BUVVIe4OGP3iFTxTlEbxTpJ',
        _localId: undefined,
        _objCount: 0,
        className: 'BscTransactions'
        attributes: {
            block_timestamp: 2021-11-03T07:47:16.000Z,
            hash: '0xf175aab43e2a9422f59edce7243b1f6e7f50ee484a1baf32a8841ee8c5481ab2',
            nonce: 5,
            block_hash: '0xa8110d76885e868d06fea0c4617f41efdbfc013fa22f441e74af8292a54b3c35',
            block_number: 12327379,
            transaction_index: 215,
            from_address: '0x29590ef5e2b7e57ae2154fb471d40879996244a5',
            to_address: '0x275e400c6f8b1cee71060c2c5c1abbe0b72bbb60',
            value: '10000000000000',
            gas_price: 5000000000,
            gas: 21000,
            input: '0x',
            confirmed: false,
            createdAt: 2021-11-03T07:47:26.771Z,
            updatedAt: 2021-11-03T07:47:26.771Z
        }
    }
   */
  async listenToNewTransactions(callback) {
    // create query
    const query = new Moralis.Query('BscTransactions');
    // subscribe for real-time updates
    const subscription = await query.subscribe();
    subscription.on('create', callback);
  }
}
