function login(){
    var user = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;
    // var error =document.getElementById('error');
    
    if(user=='Scatysaver@gmail.com' && pwd=='12345678'){
        return true;
    }
    else {
        error.innerHTML = "Username or Password is Incorrect";
        return false;
    }
}