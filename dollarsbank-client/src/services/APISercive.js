
const APIService = {

    sendLogin(username, password){
        const postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application.json'},
            body: {
                'username': username,
                'password': password
            }
        };
        return fetch ('URL HERE', postOptions)
        .then ( res => {
            //do something here
            //set user ID into token service
        });
    }
}

export default APIService;