import React from 'react'
import './App.css';
 const Deposit = ({state}) => {
    
    
    return (
        <div>
            <input type="text" className="commanMargin" placeholder="Enter an amount"></input>
            <button type="button" className="btn btn-primary commanMargin">Deposit</button>
            <input type="text" className="commanMargin" placeholder="Enter an amount"></input>
            <button type="button" className="btn btn-primary commanMargin">Withdraw</button>
          </div>
        
    )
}
export default Deposit;