import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session, useSessionContext } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'
import "../styles/globals.css";
import "../styles/style.scss";
import Head from 'next/head';

export default function App({ Component, pageProps, }: AppProps<{ initialSession: Session }>) {

  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0" />
      </Head>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <SuppresLoading>
          <Component {...pageProps} />
        </SuppresLoading>
      </SessionContextProvider>
    </>
  )
}

function SuppresLoading({ children }: { children: React.ReactNode }) {
  const sessionContext = useSessionContext()
  if (sessionContext.isLoading) {
    // auth state is loading
    return (
      <div>
      </div>
    );
  } else {
    // when session context is already loaded then render children
    return <>{children}</>;
  }
}