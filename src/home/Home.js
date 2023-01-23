import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://w0.peakpx.com/wallpaper/588/913/HD-wallpaper-healthy-snacks-sandwich-food-juice-fruits.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-8xl font-bold">Welcome to Mealy</h1>
                    <p className="py-6 text-teal-700 text-base">Your number one stop shop for meals and snacked delivered right at your doorstep for NO extra charge.</p>
                    <Link to="/meals" className="btn btn-primary">Make Order</Link>
                    </div>
                </div>
            </div>
        </>
    )
}