import * as jwt from 'jsonwebtoken';

class AuthService {
    public static generateToken = (id: number, email: string, statusId: number) => {
        const data = {
            id: id,
            email: email,
            statusId: statusId
        };

        const signature = '/9Hdfj<2YmE#z7[M';
        const expiration = '1m';

        return jwt.sign({ data }, signature, { expiresIn: expiration, algorithm: 'HS256' });
    }
}

export { AuthService };
