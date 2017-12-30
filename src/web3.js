const Web3 = require('web3');

if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
}

web3.eth.getAccounts((error, accounts) => {
	if (error) {
		
	}
	
	if (accounts) web3.eth.defaultAccount = accounts[0];

	// TODO: fire event -> then other web3 calls get executed
});

const Contract = require('./contract');