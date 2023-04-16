import type { NextApiRequest, NextApiResponse } from 'next'
import { Session, SupabaseClient, createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const requestWithSupabaseAuth = async function (req: NextApiRequest, res: NextApiResponse, action: (supabaseClient: SupabaseClient, session: Session) => Promise<any>): Promise<any> {
    try {
        const supabaseServerClient = createServerSupabaseClient({ req, res });
        const session = await supabaseServerClient.auth.getSession();
        if (session?.data?.session == null) {
            return res
                .status(401)
                .json({
                    success: false,
                    message: 'Authentication failed'
                });
        }
        const ret = await action(supabaseServerClient, session.data.session);
        return res
            .status(200)
            .json(ret)
    } catch (e) {
        return res
            .status(500)
            .json({
                success: false,
                message: e.message
            })
    }
}