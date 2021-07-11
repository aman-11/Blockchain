import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from "./containers/Payment/UserPayment";
import Main from "./containers/Main/Main";
import Login from "./containers/Login/Login"
import Signin from "./containers/SignIn/Signin";
import Home from "./containers/Home/Home";
import React, { useState, useEffect } from "react";
import Show from './containers/Transaction/Show'
import Web3 from 'web3'
import CrowdSource from './abis/CrowdSource.json'

class App extends React.Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable()
    }
    else {
      alert("Please install MetaMask to use this dApp!");
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    //load account
    const accounts = await web3.eth.getAccounts()
    // console.log(accounts)
    this.setState({ account: accounts[0] })
    // console.log(ctcnData.account)
    const networkId = await web3.eth.net.getId()
    const networkData = CrowdSource.networks[networkId]
    if (networkData) {
      try {
        this.setState({ load: true })
        const contract = new web3.eth.Contract(CrowdSource.abi, networkData.address)
        this.setState({ contract })
        const campCount = await contract.methods.CampCount().call()

        //campaign get()
        let res = []
        this.setState({ campCount })
        for (var i = 1; i <= this.state.campCount; i++) {
          const campaigns = await contract.methods.campaigns(i).call()
          res = [...res, campaigns]
        }
        //console.log(res)
        Promise.all([res]).then((value) => {
          //console.log(value)
          this.setState({ camps: value })
          localStorage.setItem("camps", JSON.stringify(value))
        })
        // console.log(this.state.camps)
        //get all transactions
        const user = JSON.parse(localStorage.getItem('profile'))
        this.setState({ email: user.email })

        const donationCount = await contract.methods.count().call()
        this.setState({ donationCount: donationCount })
        let amount = 0
        for (var i = 1; i <= this.state.donationCount; i++) {
          let allDonations = await contract.methods.donations(i).call()
          if (this.state.email === allDonations.sender) {
            this.setState({ transactions: [...this.state.transactions, allDonations] })
            amount = parseFloat(allDonations.amount) + amount
          }
        }
        //console.log(amount);
        // localStorage("userBal", JSON.stringify(amount))
        this.setState({ userBal: amount })

        this.setState({ load: false })
        //console.log(this.state.transactions)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Contract not deployed to this network')
    }

  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      load: true,
      contract: '',
      userBal: 0,
      camps: [],
      campCount: 0,
      transactions: [],
      donationCount: 0,
      email: ''
    }
    this.setTransaction = this.setTransaction.bind(this)
  }

  //setTransaction P->A
  setTransaction(_amount, _campId, _sender, _recipient, _from, _to) {
    this.setState({ load: true })
    this.state.contract.methods.setTransaction(_amount, _campId, _sender, _recipient, _from, _to).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ load: false })
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/login" exact >
            <Login />
          </Route>
          <Route path="/signin" exact >
            <Signin />
          </Route>
          <Route path="/payment/:id" exact >
            <Payment
              setTransaction={this.setTransaction}
              userBal={this.state.userBal}
            />
          </Route>
          <Route path="/main" exact >
            <Main
              userBal={this.state.userBal}
              camps={this.state.camps}
            />
          </Route>
          <Route path="/show" exact >
            <Show
              transactions={this.state.transactions}
              camps={this.state.camps}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
