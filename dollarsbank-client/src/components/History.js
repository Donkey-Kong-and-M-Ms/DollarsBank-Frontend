import React from 'react';
import APIService from '../services/APISercive';
import {Link} from 'react-router-dom';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {his: [], xml: ""}        
    }
    componentDidMount(){
        APIService.getRecent()
        .then(res => {
            this.setState({ his:  res});
            this.generateTable();
        });
    }
 
    generateTable = () => {
        return this.state.his.map(test => {
            return (<tr>
                <td>Transaction ID: {test.transactionId}      |  </td>
                <td>{test.description}</td>
            </tr>)
        })
    }

    render() {
        return <div>
            <table>{this.generateTable()}</table>
            <Link to ={'/home'}><button className="homeButton">Home</button></Link>
        </div>
    }
}

export default History;