import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
const KEY = process.env.KEY;

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.body) {
        res.statusCode = 404;
        res.end("Error");
        return;
    }


    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY);

        const Cookie = serialize("jwt", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });
        res.setHeader('Set-Cookie', Cookie);
        res.status(200).json({ message: "Auth" });
    } else {
        res.status(401).json({ message: "invalid credentials!" });
    }


}