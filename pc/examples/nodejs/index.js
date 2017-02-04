let MineplexAPIWrapper = require('mineplex-api-wrapper');

let apiKey = '';
let api = new MineplexAPIWrapper(apiKey);

api.getPlayerInfo('Phinary', (err, result) => {
  if (err) {
    // uh oh
    console.log(result); // error info
    return;
  }

  // do something with data
  console.log(`name: ${result.name}, rank: ${result.rank}`);
});