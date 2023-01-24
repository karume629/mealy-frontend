import { Link } from "react-router-dom";

export default function ConfirmOrder(){
    return(
        <>
            <div className="container mt-10 mx-auto w-2/4 ">
                <div className="card flex flex-col justify-center border-4 border-teal-400 p-6">
                    <h1 className="text-teal-800 text-3xl border-b-4 mb-6 border-teal-300 text-center font-extrabold w-fit">Confirm Order</h1>
                    <div className="flex flex-row justify-between">
                        <h2 className="text-teal-800 font-bold text-2xl">Total Amount In Your Account</h2>
                        <h2 className="text-teal-900 font-extrabold text-2xl">KES 84200</h2>
                    </div>

                    <hr className="my-6 border-2 border-teal-200" />

                    <div className="flex flex-row justify-between">
                        <h2 className="text-teal-800 font-bold text-2xl">Amount To Pay</h2>
                        <h2 className="text-teal-800 font-bold text-2xl">KES 4200</h2>
                    </div>

                    <div>
                    <h2 className="text-teal-800 font-semibold text-xl underline my-5">Items</h2>

                    <ul>
                        <li className="flex flex-row justify-between items-center border-2 border-teal-100 mb-2 rounded-lg p-2">
                            <span>Chicken biryani</span> <span className="text-xl font-bold">x4</span>
                        </li>
                        <li className="flex flex-row justify-between items-center border-2 border-teal-100 mb-2 rounded-lg p-2">
                            <span>Samosa</span> <span className="text-xl font-bold">x4</span>
                        </li>
                        <li className="flex flex-row justify-between items-center border-2 border-teal-100 mb-2 rounded-lg p-2">
                            <span>Beef stew with rice</span> <span className="text-xl font-bold">x4</span>
                        </li>
                    </ul>
                    </div>

                    <hr className="my-6 border-2 border-teal-200" />

                    <div className="font-bold text-red-800 text-center flex items-center justify-center">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                        </svg>
                        By clicking <span className="text-lg font-bold underline mx-1">Make Order</span> you confirm to making this purchase
                    </div>

                    <div className="flex justify-evenly items-center flex-row mt-4">
                        <button className="btn bg-teal-500 text-white">Make Order</button>
                        <Link to="/meals" className="btn btn-outline btn-warning hover:btn-warning">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </>
    )
}