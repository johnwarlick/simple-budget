// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { mockBudget } from "../../mock-budget";

export default function handler(req:NextApiRequest, res:any) {
    res.status(200).json(mockBudget.monthly)
}
