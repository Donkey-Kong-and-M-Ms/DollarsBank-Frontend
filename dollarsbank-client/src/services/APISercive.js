import TokenService from './TokenService';
import config from '../config';

URL = config.BASE_URL;

const APIService = {

    postLogin(username, password){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'username': username,
                'password': password
            }
        };
        return fetch (URL, postOptions)
        .then ( res => {
            //do something here
            //set user ID into token service
        });
    },
    postDeposit(amount){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'amount': amount,
                'id': TokenService.getUserID()
            }
        };
        return fetch (URL, postOptions)
        .then ( res => {
            //display error or success
        });
    },
    postWithdraw(amount){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'amount': amount,
                'id': TokenService.getUserID()
            }
        };
        return fetch (URL, postOptions)
        .then ( res => {
            //display error or success
        });
    },
    postTransfer(amount, targetID){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'amount': amount,
                'id': TokenService.getUserID(),
                'targetID': targetID
            }
        };
        return fetch (URL, postOptions)
        .then ( res => {
            //display error or success
        });
    },
    postNewUser(username, password, amount){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'username': username,
                'password': password,
                'amount': amount
            }
        };
        return fetch (URL, postOptions)
        .then ( res => {
            //display error or success
        });
    },
    getRecent(id){
        //this one im less certain on that the post ones
        const getOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application.json'},
            body: {}
        };
        return fetch (URL, getOptions)
        .then ( res => {
            //extract data for rendering
        });
    }
}

export default APIService;