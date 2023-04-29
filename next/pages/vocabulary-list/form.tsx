import { useState } from "react";

export default function VocabularyListForm({ props }): JSX.Element {
    const [state, setState] = useState({
        word: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div className="mt-6 ml-5 mr-5 mb-8">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="word" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter new word that you would like to add in the vocabulary.</label>
                    <input id="word" name="word" className="bg-gray-100 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                        onChange={handleInputChange} value={state.word} />
                </div>
                <div className="mx-auto relative flex justify-center mt-2">
                    <button className="relative w-3/5 bg-red-800 h-10 rounded-full text-base text-white hover:bg-red-600">Add to vocabulary</button>
                </div>
            </form>
        </div>
    );
}
