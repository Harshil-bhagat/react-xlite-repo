import React, {Component} from 'react';

import './comp.css';
import getWeb3 from "../getWeb3";


export class TopNavBar extends Component {

  state = { web3: "", account: null, accountBalance: 0, contract: null, contractBalance: 0, connected : false};
    getWeb = async () => {
        try {
          // Get network provider and web3 instance.
          console.log("inside getweb");
          const web3 = await getWeb3();
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
          let account = accounts[0];
    
          //Check Account Balance
          let accbalance = await web3.eth.getBalance(accounts[0]);
          accbalance = web3.utils.fromWei(accbalance);
          
          // Get the contract instance.
          // const networkId = await web3.eth.net.getId();
          const SendMoneyContract = new web3.eth.Contract(this.ABI,this.ContractAddress);
          SendMoneyContract.options.address = this.ContractAddress;
          let conBalance = await web3.eth.getBalance(this.ContractAddress);
          conBalance= web3.utils.fromWei(conBalance);
          // let sendToContract = await instance.methods.receiveMoney().send({from:account,to:this.ContractAddress, value:web3.utils.toWei('5', 'ether')});
          // console.log(sendToContract);
          // let value = await web3.utils.toWei('1', 'ether');
          // const receipt = await instance.methods.withdrawMoney(value).send({from:account});
          this.setState({ web3, account, accountBalance: accbalance, contract:this.ContractAddress, contractBalance: conBalance, connected: true });
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };
render(){
    return (
        <div className="navbar">
            <Navbar id="topnav">
                <Button variant="outline-primary" id="btnConnect" onClick={this.getWeb}>Connect</Button>
            </Navbar>
        </div>
        
    )
}
}