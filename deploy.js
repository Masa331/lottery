const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'seat twenty trap nut coach need cigar brain anchor panic cook hammer',
  'https://rinkeby.infura.io/37Qt7ZfQNTBEaNVKZ7Ff'
);

const web3 = new Web3(provider);

const deploy = async ()=> {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);

  const contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode})
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('Deployed to: ', contract.options.address);
};

deploy();
