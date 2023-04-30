import AuthOnly from "../../components/layout/auth-only";
import ListViewLayout from "../../components/layout/list-view-layout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function VocabularyAddWord({ props }): JSX.Element {

    const supabaseClient = useSupabaseClient();

    const createRecrod = async () => {
        const { error } = await supabaseClient
            .from('vocabulary_set')
            .insert({
                name: 'test',
                owner_user_id: (await supabaseClient.auth.getUser()).data.user.id,
                data: { name: 'test' }
            });
    };

    return (
        <AuthOnly>
            <ListViewLayout backUrl="/">
                <div>
                    Ahoj ...
                </div>
                <div>
                    <button onClick={() => createRecrod()}>Create new record</button>
                </div>
            </ListViewLayout>
        </AuthOnly>
    );
}
