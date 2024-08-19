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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
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
        />
      </div>
      <div>
        <label htmlFor="amount" aria-placeholder="enter amount"></label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
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
        marginRight:"100px",
        // backgroundColor:"blue",
        // color:"white"
      }} onClick={addTransaction}>Add a transaction</button>
    </div>
  );
}

export default Display;
