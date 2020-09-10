import TokenService from './TokenService';

URL = "http://localhost:8080";

const APIService = {

    postLogin(username, password) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'userId': username,
                'password': password
            })
        };
        return fetch(URL + '/login/login', postOptions)
            .then(res => res.text())
            .then(res => {
                if (res === "Login Success") {
                    TokenService.saveUserID(username);
                    return true;
                } else if (res === "Login Failed") {
                    return false;
                } else {
                    alert("something went wrong");
                    return false;
                }
            });
    },
    postDeposit(amount) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'amount': amount,
                'id': TokenService.getUserID()
            })
        };
        return fetch(URL, postOptions)
            .then(res => {
                //display error or success
            });
    },
    postWithdraw(amount) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'amount': amount,
                'id': TokenService.getUserID()
            })
        };
        return fetch(URL, postOptions)
            .then(res => {
                //display error or success
            });
    },
    postTransfer(amount, targetID) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'amount': amount,
                'id': TokenService.getUserID(),
                'targetID': targetID
            })
        };
        return fetch(URL, postOptions)
            .then(res => {
                //display error or success
            });
    },
    postNewUser(first, last, contact, add, password) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "firstName": first,
                "lastName": last,
                "contactNum": contact,
                "address": add,
                "password": password
            })
        };
        return fetch(URL + "/login/user/add", postOptions)
            .then(res => res.text());
    },
    getRecent(id) {
        //this one im less certain on that the post ones
        const getOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: {}
        };
        return fetch(URL, getOptions)
            .then(res => {
                //extract data for rendering
            });
    }
}

export default APIService;