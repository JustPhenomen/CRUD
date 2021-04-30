import { Request, Response } from 'express';
import { AppPool } from '../../../app-pool';

const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await AppPool.query('SELECT * FROM "User"');

        res.status(200).json(response.rows);
    } catch (er) {
        console.log(er);

        res.status(500).json('Server Error');
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const response = await AppPool.query('SELECT * FROM "User" WHERE id = $1', [req.params.id]);

        res.status(200).json(response.rows);
    } catch (er) {
        console.log(er);

        res.status(500).json('Server Error');
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password, status_id } = req.body;
        await AppPool.query(
            'INSERT INTO "User" (email, password, status_id) VALUES ($1, $2, $3)',
            [email, password, status_id]
        );

        res.json({
            message: 'User created',
            body: {
                user: {
                    email,
                    password,
                    status_id
                }
            }
        });
    } catch (er) {
        console.log(er);

        res.status(500).json('Server Error');
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const response = await AppPool.query('DELETE FROM "User" WHERE id = $1', [req.params.id]);

        res.status(200).json(response.rows);
    } catch (er) {
        console.log(er);

        res.status(500).json('Server Error');
    }
}

export { getUsers, getUser, createUser, deleteUser };
