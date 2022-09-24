// function verify(){
//     var password = document.getElementById('jPassword').value;
//     var cPassword = document.getElementById('cPassword').value;
//     var error =document.getElementById('error');
    
//     if(password != cPassword){
//         alert("Password does not match");
//         // error.innerHTML = "Password does not match";
//         return false;
//     }
//     else {
//         alert("Registration Successful");
//         // error.innerHTML = "Registration Successful";
//         return true;
//     }
// }

// var password = document.getElementById('jPassword').value;
// var cPassword = document.getElementById('cPassword').value;
// var form = document.getElementById('form');
// var errorElement =document.getElementById('error');

// form.addEventListener('submit', (e) => {
//     let message = []
//     if(password != cPassword){
//         message.push('Password does not match')
//     }
//     if(message.length > 0){
//         e.preventDefault()
//         errorElement.innerText = message.join(', ')
//     }
// })

function validateForm() {
    let password = document.forms["form"]["jPassword"].value;
    let cPassword = document.forms["form"]["cPassword"].value;
    var errorElement =document.getElementById('error');
    if (password != cPassword) {
        alert("Password does not match");
        return false;
    }
    if (password.length < 8 || password.length > 20) {
        alert("Password is less than 8 character or greater than 20 character");
        return false;
    }
    else{
        alert("Registration Successful");
        return true;
    }
}