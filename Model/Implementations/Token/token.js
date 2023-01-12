const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

class Token {
    refreshTokens;
    constructor() {
        this.refreshTokens = new Array();
    }

    generateAccessToken(user) {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}) 
    }

    generateRefreshToken(user) {
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
        this.refreshTokens.push(refreshToken);
        return refreshToken
    }
}

module.exports = Token;