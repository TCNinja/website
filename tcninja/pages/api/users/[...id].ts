import type { NextApiRequest, NextApiResponse } from 'next'

import IUserData from '../../../common/user/userData';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const queryId = id[0];
  const userData: IUserData[] = await (await fetch(`http://localhost:3004/users/${queryId}`)).json();
  if(userData) {
  return res.status(200).json( userData );
  } else {
    return res.status(404).json({ message: 'User not found' });
  }
  
}