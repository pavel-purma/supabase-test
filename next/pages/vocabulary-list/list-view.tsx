import AuthOnly from "../../components/layout/auth-only";
import ListViewLayout from "../../components/layout/list-view-layout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function VocabularyAddWord({ props }): JSX.Element {

    const supabaseClient = useSupabaseClient();

    const createRecrod = async () => {
        // const { data, error } = await supabaseClient
        //     .from('vocabulary_set')
        //     .insert({
        //         name: 'test',
        //         owner_user_id: (await supabaseClient.auth.getUser()).data.user.id,
        //         data: { name: 'test' }
        //     })
        //     .select();

        let { data, error } = await supabaseClient
            .rpc('vocabulary_set_create', {
                name: 'test'
            });

        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
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
