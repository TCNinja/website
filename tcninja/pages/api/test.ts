// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import conn from "../../lib/db";
import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryResult } from "pg";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const results: QueryResult<any> = await conn!.query("SELECT * FROM cards.public.cards");
        res.status(200).json({ res: results });
}


