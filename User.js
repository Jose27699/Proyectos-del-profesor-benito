class User {
    email;
    password;
    constructor(name, password){
        this.email = name;
        this.password = password; 
    }
    

    /**
     * 
     * @param {Array} users 
     * @returns 
     */
    login(users){
        let result = users.find(({ email }) => email === this.email);
        if(result == undefined){
            return "El usuario no se encuentra registrado";
        } 
        else{
            
            return result.password == this.password ? true : 'Contraseña incorrecta';
             
        }
    }
}