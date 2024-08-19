import React, { useState } from "react";

import '/src/App.css'
function Display() {
  const [transactions, setTransactions] = useState([
    { name: "Salary", amount: 15000, type: "income" },
    { name: "Grocery", amount: 1500, type: "expense" },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    name: "",
    amount: "",
    type: "expense",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const addTransaction = () => {
    setTransactions([
      ...transactions,
      { ...newTransaction, amount: parseFloat(newTransaction.amount) },
    ]);
    setNewTransaction({ name: "", amount: "", type: "expense" });
  };

  return (
    <div className="container">
      <h1>History of your transaction</h1>
      <table style={{
        width:"100%",

        

      }}>
       
        <tbody style={{
      
          height: "80px",
          padding: "10px",
          borderRadius: "3px",
          width: "100%",
          // marginBottom: "10px",
          backgroundColor:"whitesmoke"
          
        }}>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              {/* <td>{transaction.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a new transaction</h2>
      <div>
        <label htmlFor="name" aria-placeholder="enter item"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={newTransaction.name}
          onChange={handleInputChange}
          placeholder="Enter Item"
        />
      </div>
      <div>
        <label htmlFor="amount" ></label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
        />
      </div>
      <div style={{
         width:"60px"
      }}>
        <label htmlFor="type"></label>
        <select
          id="type"
          name="type"
          value={newTransaction.type}
          onChange={handleInputChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button style={{
        width:"200px",
        height:"30px",
        marginLeft:"50px"
        // backgroundColor:"blue",
        // color:"white"
      }} onClick={addTransaction}>Add a transaction</button>
    </div>
  );
}

export default Display;
