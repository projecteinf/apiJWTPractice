const bcrypt = require('bcrypt');

class User {
    name;
    password;

    constructor(name,password){
        this.name = name;
        this.password = password;
    }

    static async encrypt(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;
    }
}

module.exports = User;