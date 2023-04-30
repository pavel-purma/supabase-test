import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";

export default function AuthOnly({ children }): JSX.Element {
    const sessionContext = useSessionContext();
    const router = useRouter();

    if (sessionContext.session == null) {
        router.push("/");
    } else {
        return children;
    }
}
