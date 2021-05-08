import './App.css';
import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import Deposit from "./Deposit";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/esm/Card'
class App extends Component {
ABI = [ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "Received", "type": "event" }, { "inputs": [], "name": "receiveMoney", "outputs": [], "stateMutability": "payable", "type": "function" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [ { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "withdrawMoney", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "withdrawMoneyTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [], "name": "balanceReceived", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]
ContractAddress="0x90fF7b045B7607f537ad4Ab6fE52F996B0612Eb1"
state = { web3: null, account: null, accountBalance: 0, contract: null, contractBalance: 0, connected : false};
connection1 = <span style={{ color: "green" }}>Connection</span>
connection2 = <span style={{ color: "red" }}>Connection</span>



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
      const networkId = await web3.eth.net.getId();
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

  getBalance = async ()=>{
    try{
      let web3 = this.state.web3;
      let account = this.state.account;
      let accbalance = await web3.eth.getBalance(account);
      accbalance = web3.utils.fromWei(accbalance);
      let contract = this.state.contract;
      let conbalance = await web3.eth.getBalance(contract);
      conbalance = web3.utils.fromWei(conbalance);
      this.setState({
        accountBalance: accbalance,
        contractBalance: conbalance}
      )
    }catch(err){
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(err);
    }
  }

  deposit = async ()=>{
    let depositAmount = document.getElementById("depositAmount").value;
    console.log(depositAmount)
    let web3 = this.state.web3;
    let SendMoneyContract = new web3.eth.Contract(this.ABI,this.ContractAddress);
    let sendToContract = await SendMoneyContract.methods.receiveMoney().send({from:this.state.account,to:this.ContractAddress, value:web3.utils.toWei(depositAmount, 'ether')});
    console.log(sendToContract);
}

withdraw = async ()=>{
  let withdrawAmt = document.getElementById("withdrawalAmount").value;
  console.log(withdrawAmt)
  let web3 = this.state.web3;
  let SendMoneyContract = new web3.eth.Contract(this.ABI,this.ContractAddress);
  let value = await web3.utils.toWei(withdrawAmt, 'ether');
  const receipt = await SendMoneyContract.methods.withdrawMoney(value).send({from:this.state.account});
  console.log(receipt);
}

  render() {
    return (
      <div className="main-div">
        <div className="first-div">
          <div className="dashboard card">
            <div className="dash-content card-body">
              <span >Dashboard</span>
              <span>{this.state.connected ? this.connection1 : this.connection2}</span>
            </div>
          </div>
          <button type="button" className="btn btn-primary " style={{ marginBottom: "5px" }} onClick={this.getWeb}>
            Login with Metmask
          </button>
          <button type="button" className="btn btn-primary " style={{ marginBottom: "5px" }} onClick={this.getBalance}>
            Update Account
          </button>
          <div className="second-div">
            <div className="dashboard card">
              <div className="personal-content card-body">
                <div class="card-body pb-0 border-bottom-0">
                <ul class="ulList">
                  <li class="list">Account</li> <span style={{paddingLeft:"5px"}}>{this.state.account}</span>
                  <li class="list">Account Balance</li> <span style={{paddingLeft:"5px"}}>{this.state.accountBalance}</span>
                  <li class="list">Contract Address</li> <span style={{paddingLeft:"5px"}}>{this.state.contract}</span>
                  <li class="list">Contract Balance</li> <span style={{paddingLeft:"5px"}}>{this.state.contractBalance}</span>
                </ul>
                </div>
              </div>
            </div> 
          <div>
            <input type="text" className="commanMargin" id="depositAmount" placeholder="Enter an amount"></input>
            <button type="button" className="btn btn-primary commanMargin" onClick={this.deposit}>Deposit</button>
            <input type="text" className="commanMargin" id="withdrawalAmount" placeholder="Enter an amount"></input>
            <button type="button" className="btn btn-primary commanMargin" onClick={this.withdraw}>Withdraw</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
