import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  let res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient({ req, res })

  if (req.nextUrl.pathname.startsWith('/api')) {
    // check authentication
    const session = await supabase.auth.getSession()
    if (session?.data?.session == null) {
      res = new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Authentication failed'
        }),
        {
          status: 401,
          headers: { 'content-type': 'application/json' }
        }
      )
    }
  }

  return res
}
