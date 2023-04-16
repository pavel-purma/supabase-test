import type { NextApiRequest, NextApiResponse } from 'next'
import { requestWithSupabaseAuth } from '../../lib/server/request-helper-auth';
import { stringify } from 'querystring';

export default async function test(req: NextApiRequest, res: NextApiResponse) {
    return await requestWithSupabaseAuth(req, res, async (supabaseClient, session) => {

        const request = {
            "prompt": "Generate 5 sentences as questions for which the right answer would be word \"ruin\"\n",
            "temperature": 0.46,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0,
            "max_tokens": 600,
            "best_of": 1,
            "stop": null
        };

        const response = await fetch("https://commerceopenai.openai.azure.com/openai/deployments/text-davinci-003/completions?api-version=2022-12-01",
            { 
                method: "POST", 
                body: JSON.stringify(request),
                cache: "no-cache",
                headers: {
                  "Content-Type": "application/json",
                  "api-key": process.env.AI_API_KEY
                },                
            }
        );

        var resultText = "";
        if (!response.ok) {
            console.log(`AI API error. HTTP Code: ${response.status} - ${response.statusText}`);
        } else {
            const completion = await response.json();
            resultText = completion.choices[0].text;
        }        
        return {
            message: `Hello there! - ${session.user.email}`,
            resultText
        };
    });
}
