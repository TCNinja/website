import { NextApiRequest, NextApiResponse } from 'next'
import ICard from '../../../common/models/card';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICard[]>
) {
  res.status(200).json(
    [
        {
            id: "262926",
            title: "Test Card",
            imageUri: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=262926&type=card"
        },
        {
            id: "262927",
            title: "Test Card",
            imageUri: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=262926&type=card"
        }
    ]
  )
};