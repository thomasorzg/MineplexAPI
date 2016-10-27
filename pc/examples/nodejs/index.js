let MineplexAPIWrapper = require('mineplex-api-wrapper');

let apiKey = '';
let api = new MineplexAPIWrapper(apiKey);

api.getPlayerInfo('Phinary', (success, result) => {
  if (!success) {
    // uh oh
    console.log(result); // error info
    return;
  }

  // do something with data
  console.log(`name: ${result.getName()}, rank: ${result.getRank()}`);
});