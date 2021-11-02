import fetch from 'node-fetch';

/**
 * Source:
 * https://docs.alchemy.com/alchemy/documentation/enhanced-apis/notify-api
 */

/**
 * https://docs.alchemy.com/alchemy/documentation/enhanced-apis/notify-api#webhook_type
 * webhook_type
 * Each type of webhook is represented as a different integer:
 * 0: Mined Transactions
 * 1: Dropped Transactions
 * 4: Address Activity
 * 5: Gas Price
 */

export class AlchemyNotify {
  constructor(apiKey, app_id, webhook_type, webhook_url) {
    this.apiKey = apiKey;
    this.app_id = app_id;
    this.webhook_type = webhook_type;
    this.webhook_url = webhook_url;
  }

  /**
   * 
   * @param {*} apiKey 
   * @returns array
   * [{
      id: 111,
      app_id: 'zzz',
      network: 0,
      webhook_type: 4,
      webhook_url: 'https://zzz.com/hooks',
      is_active: true,
      time_created: 1635836957000,
      addresses: [Array]
    }]
   */
  getTeamWebhooks = async (apiKey) => {
    const fetchResult = await fetch(
      'https://dashboard.alchemyapi.io/api/team-webhooks',
      {
        headers: { 'X-Alchemy-Token': this.apiKey },
      }
    );
    const result = await fetchResult.json();
    return result;
  };

  /**
   * 
   * @returns object
   * {
      id: 111,
      app_id: 'zzz',
      network: 0,
      webhook_type: 4,
      webhook_url: 'https://zzz.com/hooks',
      is_active: true,
      time_created: 1635836957000,
      addresses: [Array]
    }
   */
  createTeamWebhook = async () => {
    const fetchResult = await fetch(
      'https://dashboard.alchemyapi.io/api/create-webhook',
      {
        method: 'POST',
        headers: { 'X-Alchemy-Token': this.apiKey },
        body: JSON.stringify({
          app_id: this.app_id,
          webhook_type: this.webhook_type,
          webhook_url: this.webhook_url,
          addresses: ['0x0ED9aABDCFD0A73eD061851dEfF3c34CC8D6c171'],
        }),
      }
    );
    const result = await fetchResult.json();
    return result;
  };

  /**
   *
   * @param {*} webhook_id
   * @param {*} addresses
   * @returns object {}
   */
  addAddresses = async (webhook_id, addresses) => {
    const fetchResult = await fetch(
      'https://dashboard.alchemyapi.io/api/update-webhook-addresses',
      {
        method: 'PATCH',
        headers: { 'X-Alchemy-Token': this.apiKey },
        body: JSON.stringify({
          webhook_id: webhook_id,
          addresses_to_add: addresses,
          addresses_to_remove: [],
        }),
      }
    );
    const result = await fetchResult.json();
    return result;
  };

  /**
   *
   * @param {*} webhook_id
   * @param {*} addresses
   * @returns object {}
   */
  removeAddresses = async (webhook_id, addresses) => {
    const fetchResult = await fetch(
      'https://dashboard.alchemyapi.io/api/update-webhook-addresses',
      {
        method: 'PATCH',
        headers: { 'X-Alchemy-Token': this.apiKey },
        body: JSON.stringify({
          webhook_id: webhook_id,
          addresses_to_add: [],
          addresses_to_remove: addresses,
        }),
      }
    );
    const result = await fetchResult.json();
    return result;
  };
}
