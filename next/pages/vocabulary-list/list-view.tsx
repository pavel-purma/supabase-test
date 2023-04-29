import { useRouter } from "next/navigation";
import AuthOnly from "../../components/layout/auth-only";
import ListViewLayout from "../../components/layout/list-view-layout";

export default function VocabularyAddWord({ props }): JSX.Element {
    const router = useRouter();
    return (
        <AuthOnly>
            <ListViewLayout>
                <div>
                    Ahoj ...
                </div>

                <button onClick={() => router.push("/")}>Go back</button>
            </ListViewLayout>
        </AuthOnly>
    );
}
