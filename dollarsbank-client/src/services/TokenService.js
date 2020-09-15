

const TokenService = {
    saveUserID(id){
        window.localStorage.setItem('UserID', id);
    },
    getUserID() {
        return window.localStorage.getItem('UserID')
    },
    clearUserId(){
        window.localStorage.removeItem('UserID');
    }

}

export default TokenService;