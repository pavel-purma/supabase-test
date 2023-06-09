import { useRouter } from "next/navigation";

export default function ListViewLayout({ children, backUrl }): JSX.Element {
    const router = useRouter();

    return (
        <div className="flex flex-col h-screen justify-between">
            <header className="bg-orange-300">
                <div className="border-1 border-white flex h-14 relative">
                    <button className='h-14' onClick={() => {
                        router.push(backUrl);
                    }}>
                        <i className="fas fa-arrow-left text-white fa-lg my-auto pl-4 pr-5"></i>
                    </button>
                    <div className="text-white text-lg ml-3 font-sans font-semibold pt-3">Vocabulary lists</div>
                </div>
            </header>
            <main className="mb-auto">{children}</main>
            <footer className="h-20 bg-gray-200">
                <div className='ml-4 mr-4 mt-3 mb-3'>
                    <button className='ml-1 mr-1 mt-1 mb-1'>
                        <svg xmlBase="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 122.875 122.648" enableBackground="new 0 0 122.875 122.648" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z" /></g></svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};
