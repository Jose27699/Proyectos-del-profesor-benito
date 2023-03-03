var  users = Helper.getUsersFromLocalStorage();

function logiUser(){
    let user = document.getElementById('email');
    let pass = document.getElementById('password');

    let user1 = new user(user.value, pass.value);

    let login = user1.login(users)
    login != true ? alert(login) : window.location.href ="register.html";

    
}