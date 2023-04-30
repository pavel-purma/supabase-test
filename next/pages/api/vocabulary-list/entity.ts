import type { NextApiRequest, NextApiResponse } from 'next'
import { requestWithSupabaseAuth } from '../../../lib/server/request-helper-auth';

export default async function listQuery(req: NextApiRequest, res: NextApiResponse) {
    return await requestWithSupabaseAuth(req, res, async (supabaseClient, session) => {
        if (req.method === 'GET') {
            const id = req.query.id;
            const entityData = await supabaseClient
                .from('vocabulary_list')
                .select("*")
                .filter("id", "eq", id);

            return entityData.data[0];
        } else if (req.method === 'POST') {

        } else {
            return res.status(405).json({ message: 'Method not allowed' })
        }
    });
}
