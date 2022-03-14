function signup(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pass = document.getElementById('password').value;
    const confirm_pass = document.getElementById('confirm_password').value;
    if(validateUsername(username)){
        if(validateEmail(email)){
            if(validateMobile(mobile)){
                if(validatePassword(pass)){
                    if(validateConfirmPassword(confirm_pass, pass)){
                        window.location.href="login.html";
                    }else{
                        alert("Passwords doesn't match!");
                    }
                } else {
                    alert("Please Enter Password of more than 8 digits");
                }
            } else {
                alert("Enter 10 Digit Mobile Number!");
            }
        } else {
            alert("Enter Valid Email!");
        }
    } else {
        alert("Enter Username!");
    }
}

function login(){
    const username = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if(validateUsername(username)){
        if(validatePassword(pass)){
            if(username=="RohanSingh" && pass=="12345678"){
                window.location.href= 'dashboard.html';
            } else {
                alert("Username/Password does not match!");
            }
        }else{
            alert("Enter valid password!")
        }
    } else {
        alert("Enter correct Username!")
    }
}

function validateUsername(name){
    if(name.trim()!=""){
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function validateMobile(mobile){
    return (mobile).length==10;  
}

function validatePassword(pass){
    return (pass.trim().length>=8);
}

function validateConfirmPassword(confirm_pass, pass){
    if (confirm_pass.trim().length >=8 && confirm_pass===pass){
        return true;
    }
    return false;
}