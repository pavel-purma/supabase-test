import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSessionContext } from '@supabase/auth-helpers-react'

export default function IndexPage({ props }) {
  const sessionContext = useSessionContext()

  if (sessionContext.session == null) {
    return (
      <div className='container-auth-login' >
        <Auth
          supabaseClient={sessionContext.supabaseClient}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <h2>Logged in</h2>

        <button onClick={
          () => sessionContext.supabaseClient.auth.signOut()
        }>
          Sign out
        </button>
      </div>
    );
  }
};
