"use strict";
exports.__esModule = true;
exports.AuthService = void 0;
var jwt = require("jsonwebtoken");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.generateToken = function (id, email, statusId) {
        var data = {
            id: id,
            email: email,
            statusId: statusId
        };
        var signature = '/9Hdfj<2YmE#z7[M';
        var expiration = '1m';
        return jwt.sign({ data: data }, signature, { expiresIn: expiration, algorithm: 'HS256' });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
