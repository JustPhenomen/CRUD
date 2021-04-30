import * as jwt from 'express-jwt';
import { Request } from 'express';

const getTokenFromHeader = (req: Request) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
}

const isAuth = jwt({
    secret: '/9Hdfj<2YmE#z7[M',
    userProperty: 'token',
    getToken: getTokenFromHeader,
    algorithms: ['HS256']
});

export { isAuth };
