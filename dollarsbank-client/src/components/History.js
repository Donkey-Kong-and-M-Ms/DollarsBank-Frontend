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
            return (<tr className="history">
                <td className="history">{test.transactionId}</td>
                <td className="history">{test.description}</td>
            </tr>)
        })
    }

    render() {
        return <div>
            <div style={{ margin: "auto", textAlign: "center" }} >
                <h1>5 most recent transactions:</h1>
            </div>
            <table className="history" style={{marginLeft:"27%"}}><tr className="history"><th className="history">Transaction ID</th><th className="history">Transaction Description</th></tr>{this.generateTable()}</table>
            <Link to="/home"><button className="homeButton">Back</button></Link>

        </div>
    }
}

export default History;