import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition";

export default function Dashboard({user}){
    const [index, setIndex] = useState(0)

    const TEXTS = [
        "Welcome",
        "Hello",
        "Greetings"
    ]

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, [])
    
    return (
        <>
            <div className="container mx-auto">
                <div className="card p-24 border-8 border-teal-800">
                {
                    user.username ?
                    <>
                        <h1 className="text-8xl">
                            <span className="font-bold">
                                <TextTransition springConfig={presets.wobbly}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </span>
                        <span className="uppercase border-b-8 border-teal-400">{user.first_name} {user.last_name}</span>
                        </h1> 
                    </>
                    :
                    <h1 className="font-bold text-5xl text-center">Login to view your dashboard </h1>
                }
                </div>

                <div className="">
                    <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Activity Summary</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="stats shadow border-2 border-teal-600 text-center">
                            <div className="stat">
                                <div className="stat-title">Total Orders Made</div>
                                <div className="stat-value">89</div>
                                <div className="stat-desc">5 Months</div>
                            </div>
                        </div>

                        <div className="stats bg-teal-400 text-primary-content">
    
                            <div className="stat">
                                <div className="stat-title">Account balance</div>
                                <div className="stat-value">KES 89,400</div>
                                <div className="stat-actions">
                                <button className="btn btn-sm btn-info text-white hover:btn-success">Add funds</button>
                                </div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-title">Current order</div>
                                <div className="stat-value">KES 1,400</div>
                                <div className="stat-actions">
                                <button className="btn btn-sm">Cancel</button> 
                                <button className="btn btn-sm">Edit</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="upcoming-events mt-3">
                        <h5 className="text-3xl border-b-4 border-teal-300 my-5 w-fit mb-4">
                            Order History
                        </h5>
                        <div className="border-2 border-teal-300 p-3 rounded-2xl w-auto">                            
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22/08 11AM</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1/2 Chicken breast and fries</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">KES 800</p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1/01 14:03PM</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Beef Pizza Large</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">KES 1400</p>
                                </li>
                                <li className="ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">13/01 08:10AM</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">5 Samosas, 3 Doughnuts, 1 Chicken Pie</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">KES 400</p>
                                </li>
                            </ol>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}