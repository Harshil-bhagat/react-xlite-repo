import './App.css';
import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import Dashboard from './Dashboard';

class App extends Component {
 cssStyle = {
    width: "100%",
    margin : "10px auto"
  };

  cardStyle={
    width: "50rem",
    color: "black"
}
connection1 = <span style={{color:"green"}}>Connection</span>
connection2 = <span style={{color:"red"}}>Connection</span>
state = { storageValue: 0, web3: null, connected: false, accounts: null, balance: 0, contract: null };

  getWeb = async () => {
    try {
      // Get network provider and web3 instance.
      console.log("inside getweb");
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
      const balance = await web3.eth.getBalance(accounts[0]);
      console.log(web3.utils.fromWei(balance));
      // accounts = web3.utils.toChecksumAddress(accounts[0]);
      // console.log(web3.utils.isAddress(defaultAccount));
      // console.log(accounts);
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log("Network ID " + networkId);
      // const instance = new web3.eth.Contract(
      //   abi,
      //   deployedNetwork.address,
      // );
        // console.log(instance);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
        this.setState({web3, accounts,balance ,connected:true});
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  disconnect = async()=>{
    this.setState = []
  }

  render() {
    return(
    <div className="App-header">
      <nav className="navbar navbar-light bg-light" style={this.cssStyle}>
        <div className="App">
          <span className="navbar-brand">Dashboard</span>
          {this.state.connected?this.connection1:this.connection2}
        </div>
      </nav>
      <button type="button" className="btn btn-primary " style={{marginBottom:"5px"}} onClick={this.getWeb}>
        Login with Metmask
      </button>
      <button type="button" className="btn btn-primary " style={{marginBottom:"5px"}} onClick={this.disconnect}>
        Disconnect
      </button>
      <Dashboard state={this.state} />
      {/* <div className="card" style={this.cardStyle}>
                    <div className="card-body">
                        <h5 className="card-text" style={{boxSizing:"border-box"}}>Account:<span>{this.accounts}</span></h5>
                        <p className="card-text">Balance:</p>
                    </div> */}
      {/* </div> */}
    </div>
  );
}
}

export default App;
