var users = Helper.getUsersFromLocalStorage();

function registerUser(){
    let user = document.getElementById('email');
    let pass = document.getElementById('password');

    let user1 = new User(user.value, pass.value);
    arreglo.find(element => element > 10);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario Registrado");
        user.value ="";
        pass.value ="";
   
}