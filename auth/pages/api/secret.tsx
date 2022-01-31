import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = process.env.KEY;

export default function (req: NextApiRequest, res: NextApiResponse) {

    const { cookies } = req;


    const token = cookies.jwt;

    const data = jwt.verify(token, KEY) as { [key: string]: boolean };

    if (data) {
        res.json({ data });
    } else {
        res.json({ admin: false });
    }

}