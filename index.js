import { config } from 'dotenv';
config();

/**
 * ALCHEMY
 */

// import { AlchemyNotify } from './alchemy.js';

// const alchemyNotify = new AlchemyNotify(
//   process.env.ALCHEMY_NOTIFY_KEY,
//   process.env.SNOWBALL_APP_ID,
//   4,
//   process.env.SNOWBALL_HOOK_URL
// );

// alchemyNotify.getTeamWebhooks().then((result) => {
//   console.log('getTeamWebhooks', result);
// });

// alchemyNotify.createTeamWebhook().then((result) => {
//   console.log('createTeamWebhook', result);
// });

// alchemyNotify
//   .addAddresses(151908, ['0x275e400c6f8b1cee71060c2c5C1AbbE0b72bBB60'])
//   .then((result) => {
//     console.log('createTeamWebhook', result);
//   });

/**
 * MORALIS
 */
import { MoralisNotify } from './moralis.js';

const moralisNotify = new MoralisNotify(
  process.env.MORALIS_SERVER_URL,
  process.env.MORALIS_APP_ID
);

moralisNotify.listenToNewTransactions((data) => {
  console.log(data, data.attributes);
});
