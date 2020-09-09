import TokenService from './TokenService';

URL = "http://localhost:8080";

const APIService = {

    postLogin(username, password){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'userId': username,
                'password': password
            }
        };
        return fetch (URL + '/login/login', postOptions)
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
    postNewUser(first, last, contact, add, password){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {
                "firstName": first,
                "lastName": last,
                "contactNum": contact,
                "address": add,
                "password": password
            }
        };
        return fetch (URL + "/login/user/add", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "firstName": first,
                "lastName": last,
                "contactNum": contact,
                "address": add,
                "password": password
            })
        })
        .then(res => res.text())
        .then ( res =>  {
            console.log(res);
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