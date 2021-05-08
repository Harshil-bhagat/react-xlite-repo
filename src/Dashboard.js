import React from 'react'

const Dashboard = ({state}) => {
    const cssStyle={
        width: "50rem",
        color: "black"
    }
    

    // const getAccount = async () =>{
    //     const defaultAccount = await window.ethereum.send('eth_requestAccounts');
    //     console.log();
    //     return defaultAccount;
    // }
    
    return (
        <div>
            <div className="card" style={cssStyle}>
                    <div className="card-body">
                        <h5 className="card-text">Account: {state.account}</h5>
                        <p className="card-text">Balance: {state.balance}</p>
                    </div>
            </div>
        </div>
    )
}

export default Dashboard;