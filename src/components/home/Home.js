import { Link } from "react-router-dom";
import homeImage from "../../assets/food.png"

export default function Home(){
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={homeImage}
                     alt="home" className="max-w-sm rounded-lg" />
                    <div>
                    <h1 className="text-6xl font-bold">Welcome to Mealy</h1>
                    <h3 className="text-3xl font-bold p-4">You Order... We Deliver...</h3>
                    <p className="py-6 text-teal-700 text-base">Your number one stop shop for meals and snacked delivered right at your doorstep for NO extra charge.</p>
                    <Link to="/meals" className="bg-[#00A082] hover:bg-[#00A082] text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Make Order</Link>
                    </div>
                </div>
            </div>
        </>
    )
}