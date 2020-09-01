

const TokenService = {
    saveUserID(id){
        window.localStorage.setItem('UserID', id);
    },
    getUserID() {
        return window.localStorage.getItem('UserID')
    }

}

export default TokenService;