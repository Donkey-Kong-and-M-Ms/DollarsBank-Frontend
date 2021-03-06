import TokenService from './TokenService';

URL = "http://localhost:8080";

const APIService = {

    postLogin(username, password) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        };
        return fetch(URL + '/login/login?userId=' + username + "&userPass=" + password, postOptions)
            .then(res => res.text())
            .then(res => {
                TokenService.saveUserID(username);
                if(res === "mainPage"){
                    return true;
                } else {
                    alert(res);
                    return false;
                }
            });
    },
    postDeposit(amount, accountType) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        };
        return fetch(URL + "/bank/deposit?amount=" + amount + "&accountType=" + accountType + "&userId=" + TokenService.getUserID(), postOptions)
            .then(res => res.text())
            .then(res => {
                alert(res);
                return 1;
            });
    },
    postWithdraw(amount, accountType) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        };
        return fetch(URL + "/bank/withdraw?amount=" + amount + "&accountType=" + accountType + "&userId=" + TokenService.getUserID(), postOptions)
            .then(res => res.text())
            .then(res => {
                alert(res);
                return 1;
            });
    },
    postTransfer(amount, targetID, accountType, recAccountType) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        };
        return fetch(URL + "/bank/fundTransfer?amount=" + amount + "&userAccountType=" + accountType + "&recAccountType=" + recAccountType + "&receiverId=" + targetID + "&userId=" + TokenService.getUserID(), postOptions)
            .then(res => res.text())
            .then(res => {
                alert(res);
                return 1;
            });
    },
    postNewUser(first, last, contact, add, password, amount, accountType) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        };
        return fetch(URL + "/bank/register?firstName=" + first
            + "&lastName=" + last
            + "&contactNum=" + contact
            + "&address=" + add
            + "&password=" + password
            + "&initialDeposit=" + amount
            + "&accountType=" + accountType
            , postOptions)
            .then(res => res.text())
            .then(res => {
                alert(res);
            });
    },
    postNewAccount(accountType, amount) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        return fetch(URL + "/bank/account/addNew?accountType=" + accountType + "&initialDeposit=" + amount + "&userId=" + TokenService.getUserID(), postOptions)
            .then(res => res.text());
    },
    getAccounts() {
        const getOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: {}
        };
        return fetch(URL, getOptions)
            .then(res => {
                //extract data for rendering
            });
    },
    getRecent() {
        const getOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        return fetch(URL + "/bank/transactions?userid=" + TokenService.getUserID(), getOptions)
            .then(res => res.json());
    }
}

export default APIService;