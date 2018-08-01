const Path = require('path');
const Fs = require('fs');
const Solc = require('solc');

const lotteryPath = Path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = Fs.readFileSync(lotteryPath, 'utf8');

module.exports = Solc.compile(source, 1).contracts[':Lottery'];
