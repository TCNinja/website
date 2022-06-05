import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const URL = 'https://ddeddd64-0f7a-4585-bb92-085da5426487.mock.pstmn.io';
    switch (req.method) {
        case 'GET':

            break;

        case 'POST':

            break;

    }
}
// ('x-api-key', 'PMAK-629c72facbc064566cbf6970-f56e8b3cd0bb15d00963f18afc158dc1d2')

res.status(200).json({})
}

export default handler;