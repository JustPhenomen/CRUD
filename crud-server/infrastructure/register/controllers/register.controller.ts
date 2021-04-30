import { Request, Response } from "express";
import { AppPool } from '../../../app-pool';

const registerUser = async (req: Request, res: Response) => {
    const errros = [];
    const { email, password, password2 } = req.body;
    
    if (!email || !password || !password2) {
        errros.push({ msg: 'Please fill all fields' });
    }

    if (password !== password2) {
        errros.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 8) {
        errros.push({ msg: 'Password should be at least 8 symbols' });
    }

    const emailOccupated = (await AppPool.query('SELECT email FROM "User" WHERE email = $1', [email])).rowCount;

    if (emailOccupated) {
        errros.push({ msg: 'Email is already occupated' });
    }

    if (errros.length) {
        res.status(406).json(errros);
    } else {
        try {
            const commonStatusId = (await AppPool.query('SELECT id FROM "Status" WHERE name = $1', ['Common'])).rows[0].id;

            await AppPool.query(
                'INSERT INTO "User" (email, password, status_id) VALUES ($1, $2, $3)',
                [email, password, commonStatusId]
            );

            res.json({
                message: 'User created',
                body: {
                    user: {
                        email,
                        password,
                        commonStatusId
                    }
                }
            });
        } catch (er) {
            console.log(er);

            res.status(500).json('Server Error');
        }
    }
}


export { registerUser };
