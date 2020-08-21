import queryString from 'query-string'
import axios from 'axios';

class Auth {
    accessToken;
    expiresAt;
    idToken;
    code;

    constructor() {
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    login=()=> {
        var url = "https://localhost:8243/authorize/" + "?response_type=token&client_id=" 
        + "B3KkILjkPLsmXhqCiY5bXHlEozMa&";
        var redirectUrl = "redirect_uri=" + "http://localhost:3000/callback";
        url = url + redirectUrl;
        window.location.href = url;
    }

    handleAuthentication() {
        const authResult = queryString.parse(window.location.hash)
        console.log(authResult);
        // if(authResult){
        //     const code=authResult.get('code')
        //     const data ={
        //         grant_type:'password',
        //         // username:'admin',
        //         // password:'admin'
        //         code: code,
        //         redirect_uri : 'http://localhost:3000/callback',
        //     }
        //     var tokenURL="https://localhost:8243/token";
        //     // ?grant_type=authorization_code&code="+code+"&redirect_uri=http://localhost:3000/callback
        //     //?grant_type=authorization_code&code="+code+"&redirect_uri=http://localhost:3000/callback&client_id=B3KkILjkPLsmXhqCiY5bXHlEozMa&client_secret=EPnnnDufWztCnnefTOa6YyNoc0Ua"
        //     const header = { headers: {'Authorization': 'Basic QjNLa0lMamtQTHNtWGhxQ2lZNWJYSGxFb3pNYTpFUG5ubkR1Zld6dENubmVmVE9hNll5Tm9jMFVh','Content-Type': 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*"}};
        //      axios.post(tokenURL,data,header)
        //     .then(response =>{
        //         console.log('Success', response);
        //         if(response && response.access_token){
        //             localStorage.setItem('isLoggedIn', 'true');    
        //             let expiresAt = (authResult.expires_in * 1000) + new Date().getTime();
        //             this.expiresAt = expiresAt;
        //             this.accessToken = authResult.access_token;
        //             localStorage.setItem('expiresAt',expiresAt);
        //             localStorage.setItem('accessToken', this.accessToken);
        //         } else {
        //             console.log("An error occurred while authentication.");
        //             alert(`Error: Check the console for further details.`);
        //         }
        //     })
        //     .catch(e=>{
        //         console.log("Error",e);
        //     })
        // }

        if(authResult && authResult.access_token) {
            localStorage.setItem('isLoggedIn', 'true');    
            let expiresAt = (authResult.expires_in * 1000) + new Date().getTime();
            this.expiresAt = expiresAt;
            this.accessToken = authResult.access_token;
            localStorage.setItem('expiresAt',expiresAt);
    
            localStorage.setItem('accessToken', this.accessToken);
        } else {
            console.log("An error occurred while authentication.");
            alert(`Error: Check the console for further details.`);
        }
    }

    logout() {
        // Remove tokens and expiry time
         this.accessToken = null;
         this.expiresAt = 0;
    
        // Remove isLoggedIn flag and other token flags from localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expiresAt');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = localStorage.getItem('expiresAt');
        return new Date().getTime() < expiresAt;
    }
    
    getAccessToken() {
        return localStorage.getItem("accessToken");
    }

}

export default Auth;