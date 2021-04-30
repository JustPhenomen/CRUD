import * as express from 'express';
import * as session from 'express-session';
import { RegisterRouter } from './infrastructure/register/routes/register.router';
import * as passport from 'passport';
import { PassportStategy } from './config/passport';
import { LoginRouter } from './infrastructure/login/login.router';
import * as cors from 'cors';
import { UserRouter } from './infrastructure/user/router/user.router';

const PORT = 8000;

const app = express();

PassportStategy(passport);

app.use(cors());

app.use(session({
    secret: '3FTxSsGXyruRvt7wYM6fLy2GKW3Q955W',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use('/register', RegisterRouter);
app.use('/login', LoginRouter);
app.use('/user', UserRouter);

app.listen(PORT, () => console.log("Server started at " + PORT));
