import React, {Component} from 'react';


export class TransactionsCards extends Component {

    ABI = [ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "Received", "type": "event" }, { "inputs": [], "name": "receiveMoney", "outputs": [], "stateMutability": "payable", "type": "function" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [ { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "withdrawMoney", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "withdrawMoneyTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [], "name": "balanceReceived", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]
    ContractAddress="0x90fF7b045B7607f537ad4Ab6fE52F996B0612Eb1";
    
        deposit = async () => {
            let depositAmount = document.getElementById("depositAmount").value;
            console.log(depositAmount)
            let web3 = this.state.web3;
            let SendMoneyContract = new web3.eth.Contract(this.ABI,this.ContractAddress);
            let sendToContract = await SendMoneyContract.methods.receiveMoney().send({from:this.state.account,to:this.ContractAddress, value:web3.utils.toWei(depositAmount, 'ether')});
            console.log(sendToContract);
        }

        withdraw = async () => {
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
        <div class="row" id="transaction">
            <div class="col-lg-6">
            <div class="card" id="deposit">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Deposit</h4>
                                        <p class="text-muted mb-4">Deposit in USD </p>
                                        <div class="row">
                                            <div class="col-lg-8">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="depositAmount" placeholder="$ 90 - $ 5400"/>
                                                <h4 class="mt-0 header-title" >= BNB 0.019887</h4> 
                                            </div> 
                                            </div>                            
                                            <div class="col-lg-4">
                                                <button type="submit" class="btn btn-primary ml-2" onClick={this.deposit}>Deposit</button>
                                            </div>                                                                   
                                     </div>
                                </div>
        </div>
        </div>
        <div class="col-lg-6">
            <div class="card" id="withdraw" >
                <div class="card-body">
                    <h4 class="mt-0 header-title">Withdraw</h4>
                    <p class="text-muted mb-4">Withdraw upto $ 50 USD</p>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="withdrawalAmount" placeholder="$ 50"/>
                                    <h4 class="mt-0 header-title" >= BNB 0.019887</h4>   
                                </div> 
                            </div>
                        <div class="col-lg-4">
                            <button type="submit" class="btn btn-primary ml-2" id="withbtn">Withdraw</button>     
                        </div>                                                          
                </div>                                               
                </div>
            </div>
        </div>
    </div>
    )
}
}