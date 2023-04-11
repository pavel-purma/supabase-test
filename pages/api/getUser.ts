import type { NextApiRequest, NextApiResponse } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default async function getUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const supabaseServerClient = createServerSupabaseClient({ req, res });
        const user = await supabaseServerClient.auth.getUser();
        if (user.data.user == null) {
            return res.status(401).json({ error: "Unauthorized" })
        }
        return res.status(200).json(user.data.user)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}