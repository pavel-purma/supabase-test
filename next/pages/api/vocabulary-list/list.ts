import type { NextApiRequest, NextApiResponse } from 'next'
import { requestWithSupabaseAuth } from '../../../lib/server/request-helper-auth';

export default async function listQuery(req: NextApiRequest, res: NextApiResponse) {
    return await requestWithSupabaseAuth(req, res, async (supabaseClient, session) => {
        return {
            message: `Hello there! - ${session.user.email}`
        };
    });
}
