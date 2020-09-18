import React from 'react'
import axios from 'axios'
import TokenService from '../services/TokenService'
import {Link} from 'react-router-dom'

export default class UserInfo extends React.Component {

	constructor(props){
		super(props)
		this.state={
			accounts:[],
			user:{}
		}
	}

	componentDidMount(){
		this.findAllAccounts()
		this.findUser()
	}

	findAllAccounts(){
		var url = "http://localhost:8080/bank/account/" + TokenService.getUserID()
		axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({accounts:data})
                console.log(data)
            })
	}

	findUser(){
		var url = "http://localhost:8080/bank/user/" + TokenService.getUserID()
		axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({user:data})
                console.log(data)
            })
	}


	render(){
		return(
			<div  style={{ margin: "auto", textAlign: "center" }} >
				<h1>User and Account Info</h1>

				<table className="history" style={{marginLeft:"auto", marginRight:"auto"}}>
					<tr className="history">
						<th className="history">User Id</th>
						<th className="history">First Name</th>
						<th className="history">Last Name</th>
						<th className="history">Address</th>
						<th className="history">Contact Number</th>
						<th className="history">Password</th>
					</tr>
					<tr key = {this.state.user.id}>
						<td className="history">{this.state.user.userId}</td>
						<td className="history">{this.state.user.firstName}</td>
						<td className="history">{this.state.user.lastName}</td>
						<td className="history">{this.state.user.address}</td>
						<td className="history">{this.state.user.contactNum}</td>
						<td className="history">{this.state.user.password}</td>
					</tr>
				</table >
				<table className="history" style={{marginLeft:"auto", marginRight:"auto"}}>
					<tr className="history">
						<th className="history">Account Id</th>
						<th className="history">Account Type</th>
						<th className="history">Account Balance</th>
					</tr>
				{this.state.accounts.map((account) => (
					<tr key= {account.id}>
						<td className="history">{account.accountId}</td>
						<td className="history">{account.accountType}</td>
						<td className="history">{account.balance}</td>
					</tr>
				))}
				</table>
				
				<Link to ={'/home'}><button className="homeButton">Home</button></Link>
			</div>
		)
	}

}