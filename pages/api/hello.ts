import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  text: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ text: 'Hello' })
}