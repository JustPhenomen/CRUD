import { AppPool } from '../../app-pool';

const attachCurrentUser = async (req, res, next) => {
    const tokenData = req.token.data;
    const userRecord = await AppPool.query('SELECT * FROM "User" WHERE id = $1', [tokenData.id]);

    req.currentUser = userRecord;

    if (!userRecord) {
        return res.status(401).end('User not found')
    } else {
        return next();
    }
}

export { attachCurrentUser };
