function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  }
  else{
    ethereum.request({method: 'eth_accounts'})
    .then(accounts => {
      if (accounts.length > 0){
        console.log('Wallet is connected', accounts[0]);
      }else{
        console.log('No accounts found');
      }
    })
    .catch(error => {
      console.error('Error connecting wallet:', error);
    });
  }
} 