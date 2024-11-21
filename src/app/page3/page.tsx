import RunDataChart from "../components/ui/RunDataRecharts";
import { RunDataList } from '@/consts/sampleRunData';
import SliderBar from "../components/ui/SliderBar";

const Page3 = () => {
   
    
    return (
        <div className="flex flex-row space-x-4">
            <RunDataChart data={RunDataList} />
            
            <div>
                <button
                    type="button"
                    className="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="hs-offcanvas-right"
                    data-hs-overlay="#hs-offcanvas-right"
                    >
                        ファイル読込表示
                </button>
                <button
                    type="button"
                    className="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="hs-offcanvas-right"
                    data-hs-overlay="#hs-offcanvas-right"
                    >
                        リアルタイムデータ表示
                </button>
                <button
                    type="button"
                    className="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="hs-offcanvas-right"
                    data-hs-overlay="#hs-offcanvas-right"
                    >
                        Option
                </button>
                
                <div>    
                    <p>表示データ</p>        
                    <label htmlFor="hs-checkbox-in-form" className="flex p-3 w-36 bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checkbox-in-form"/>
                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                                xxxxxx
                            </span>
                    </label>
                </div>            
                <div className="mt-12 space-y-8 ">
                    <p>Y軸幅</p>
                    <SliderBar/>
                </div>               
                <div
                    id="hs-offcanvas-right"
                    className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
                    role="dialog"
                    tabIndex={-1}
                    aria-labelledby="hs-offcanvas-right-label"
                >

                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3
                            id="hs-offcanvas-right-label"
                            className="font-bold text-gray-800 dark:text-white"
                            >
                            Offcanvas title
                        </h3>
                        <button
                            type="button"
                            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                            aria-label="Close"
                        >
                        <span className="sr-only">Close</span>
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-800 dark:text-neutral-400">
                        Some text as placeholder. In real life you can have the elements you have
                        chosen. Like, text, images, lists, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;