import './App.css';
import getWeb3 from "./getWeb3";
import React, { Component } from "react";
import {Navbar, Button} from 'react-bootstrap';
import {StatisticCards} from './Components/StatisticCards';
// import {TransactionsCards} from './Components/TransactionsCards';
import {Tables} from './Components/Tables';
import {Smartcontract} from './Components/Smartcontract';
import {Footer} from './Components/Footer';


class App extends Component {

ABI = [ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "Received", "type": "event" }, { "inputs": [], "name": "receiveMoney", "outputs": [], "stateMutability": "payable", "type": "function" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [ { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "withdrawMoney", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "withdrawMoneyTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [], "name": "balanceReceived", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]
ContractAddress="0x90fF7b045B7607f537ad4Ab6fE52F996B0612Eb1"
state = { web3: null, account: null, accountBalance: 0, contract: null, contractBalance: 0, connected : false};
  getWeb = async () => {
    try {
      // Get network provider and web3 instance.
      console.log("inside getweb");
      const web3 = await getWeb3();
      console.log(web3)
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      let account = accounts[0];
      console.log(account)
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
      this.setState({ web3:web3, account, accountBalance: accbalance, contract:this.ContractAddress, contractBalance: conBalance, connected: true });
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
    console.log("eth",web3.eth)
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
};


  render() {
    return(
        <div className="container">
          <div className="navbar">
            <Navbar id="topnav">
                <Button variant="outline-primary" id="btnConnect" onClick={this.getWeb}>Connect</Button>
            </Navbar>
          </div>
          <div className="cards">
                  <StatisticCards/>
          </div>
          <div className="transactionCards">
          <div className="row" id="transaction">
            <div className="col-lg-6">
            <div className="card" id="deposit">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Deposit</h4>
                                        <p className="text-muted mb-4">Deposit in USD </p>
                                        <div className="row">
                                            <div className="col-lg-8">
                                            <div className="form-group">
                                                <input type="number" className="form-control" id="depositAmount" required placeholder="$ 90 - $ 5400"/>
                                                <h4 className="mt-0 header-title" >= BNB 0.019887</h4> 
                                            </div> 
                                            </div>                            
                                            <div className="col-lg-4">
                                                <button type="submit" className="btn btn-primary ml-2" onClick={this.deposit}>Deposit</button>
                                            </div>                                                                   
                                     </div>
                                </div>
        </div>
        </div>
        <div className="col-lg-6">
            <div className="card" id="withdraw" >
                <div className="card-body">
                    <h4 className="mt-0 header-title">Withdraw</h4>
                    <p className="text-muted mb-4">Withdraw upto $ 50 USD</p>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <input type="number" className="form-control" id="withdrawalAmount" required placeholder="$ 50"/>
                                    <h4 className="mt-0 header-title" >= BNB 0.019887</h4>   
                                </div> 
                            </div>
                        <div className="col-lg-4">
                            <button type="submit" className="btn btn-primary ml-2" id="withbtn" onClick={this.withdraw}>Withdraw</button>     
                        </div>                                                          
                </div>                                               
                </div>
            </div>
        </div>
    </div>
          </div>
          <div className="table">
            <Tables />
          </div>
          <div className="smartcontract">
            <Smartcontract/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
  );
}
}

export default App;
