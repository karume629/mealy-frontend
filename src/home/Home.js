import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition";

export default function Home({user}){
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
                <div className="card p-24 border border-8 border-teal-800">
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
                    <h1>You are not logged in </h1>
                }
                </div>

                <div className="">
                    <h2 className="text-3xl border-b-4 border-teal-200 my-5 w-fit">Activity Summary</h2>

                    <div className="flex flex-col items-center justify-center">
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">Total Page Views</div>
                                <div className="stat-value">89,400</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                        </div>

                        <div className="stats bg-primary text-primary-content">
    
                            <div className="stat">
                                <div className="stat-title">Account balance</div>
                                <div className="stat-value">$89,400</div>
                                <div className="stat-actions">
                                <button className="btn btn-sm btn-success">Add funds</button>
                                </div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-title">Current balance</div>
                                <div className="stat-value">$89,400</div>
                                <div className="stat-actions">
                                <button className="btn btn-sm">Withdrawal</button> 
                                <button className="btn btn-sm">deposit</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}