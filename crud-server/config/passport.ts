import { Strategy } from 'passport-local';
import { AppPool } from '../app-pool';
import { PassportStatic } from 'passport';

const PassportStategy = (passport: PassportStatic) => {
    passport.use(
        new Strategy({ usernameField: 'email' }, async (email, password, done) => {
            const user = (await AppPool.query('SELECT * FROM "User" WHERE email = $1', [email])).rows[0];
            console.log(user);
            if (!user) {
                return done(null, false, { message: 'That email is not registered' });
            }

            if (password === user.password) {
                return done(user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        })
    );

    passport.serializeUser((user: any, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = (await AppPool.query('SELECT * FROM "User" WHERE id = $1', [id])).rows[0];

        done('err', user);
    });
};

export { PassportStategy };
