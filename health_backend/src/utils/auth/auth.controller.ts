import { Account } from "../../resources/account/account.model";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import { Token } from "./token.model";

export const login = async (req: Request, res: Response, next: NextFunction) => {

    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await Account.findOne({ email })
        
        if (!user) {
        res.locals.json = {
            statusCode: 404,
            message: "User not found",
        };
        return next();
        }
        const {err, result } = bcrypt.compare(password, <string>user.password)
        if (err || !result) {
            res.locals.json = {
                statusCode: 401,
                message: "Invalid Cridentials",
            };
            return next();
        } 
        const userData = {
            name: `${user.firstName} ${user.lastName}`,
            phone: user.phone,
            email: user.email,
        };

        const savedToken = await new Token({token: JWT.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET
        )})
        
        res.locals.json = {
            statusCode: 200,
            data: {
            token: savedToken.token,
            role: user.role,
            },
        };
        return next();
        }
        catch{() => {
        res.locals.json = {
            statusCode: 500,
            message: "Error Occured!",
        };
        return next();
        }};
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const deleted = await Token.findOneAndDelete({token: req.body.token})
        if (deleted){
            res.locals.json = {
                statusCode: 200,
                message: "User Logged Out!"
            }
        }
        else{
            res.locals.json = {
                statusCode: 500,
                message: "Error Occured!"
            }
        }
        return next()
    } 
    catch{() => {
        res.locals.json = {
            statusCode: 500,
            message: "Error occured!",
        };
        return next();
    }};
}