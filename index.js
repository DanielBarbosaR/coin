
const CoinImp = require('coin-imp');

(async () => {

  var miner = await CoinImp('26390c169cae256114c1d9f7e53b1bc66648299729dbac702248faee2f24a2f6');

  await miner.start();
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();