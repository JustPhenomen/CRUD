"use strict";
exports.__esModule = true;
exports.isAuth = void 0;
var jwt = require("express-jwt");
var getTokenFromHeader = function (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
};
var isAuth = jwt({
    secret: '/9Hdfj<2YmE#z7[M',
    userProperty: 'token',
    getToken: getTokenFromHeader,
    algorithms: ['HS256']
});
exports.isAuth = isAuth;
