import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
const KEY = process.env.KEY;

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { cookies } = req;

    const jwt = cookies.jwt;

    if (!jwt) {
        res.json({ massage: "You are not logged" });
    } else {
        const Cookie = serialize("jwt", null, {
            httpOnly: true,
            maxAge: 0,
            path: "/"
        });

        res.setHeader('Set-Cookie', Cookie);
        res.status(200).json({ message: "Success logget out!" });
    }


}