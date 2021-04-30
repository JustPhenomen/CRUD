import { Request, Response } from "express";
import { AppPool } from '../../app-pool';
import { AuthService } from '../auth-service/auth-service';

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userRecord = (await AppPool.query('SELECT * FROM "User" WHERE email = $1', [email])).rows[0];

    if (!userRecord || userRecord.password !== password) {
        throw new Error('Incorrect input');
    }

    res.json({
        user: {
            id: userRecord.id,
            email: email,
            statusId: userRecord.status_id
        },
        token: AuthService.generateToken(userRecord.id, userRecord.email, userRecord.status_id)
    });
}

export { loginUser };
