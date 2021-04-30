import { Request, Response } from 'express'

const enesureAuthenticated = (req: Request, res: Response, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
}

export { enesureAuthenticated };
