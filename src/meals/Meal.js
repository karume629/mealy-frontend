import { Link } from "react-router-dom";
import Checkout from "../checkout/Checkout";

export default function Meals(){
    return(
        <>
            <div className="container mx-auto mt-6">
                <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Menu</h2>
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-5">                    
                        <div className="w-full max-w-sm bg-white border border-teal-200 hover:scale-105 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700">
                            <div className="flex justify-center items-center">
                                <img className="p-4 rounded-full w-48 h-48 object-cover" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="product image" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-lg pb-3 font-semibold tracking-tight text-teal-900 border-b-2 border-teal-500 dark:text-white">
                                        Chicken biryani rice
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-2xl font-bold text-teal-900 dark:text-white">KES 999</span>
                                    <Link to="/id" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Order</Link>
                                </div>
                            </div>
                        </div> 

                        <div className="w-full max-w-sm bg-white border border-teal-200 hover:scale-105 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700">
                            <div className="flex justify-center items-center">
                                <img className="p-4 rounded-full w-48 h-48 object-cover" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="product image" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-lg pb-3 font-semibold tracking-tight text-teal-900 border-b-2 border-teal-500 dark:text-white">
                                        Chicken biryani rice
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-2xl font-bold text-teal-900 dark:text-white">KES 999</span>
                                    <Link to="/id" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Order</Link>
                                </div>
                            </div>
                        </div> 

                        <div className="w-full max-w-sm bg-white border border-teal-200 hover:scale-105 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700">
                            <div className="flex justify-center items-center">
                                <img className="p-4 rounded-full w-48 h-48 object-cover" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="product image" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-lg pb-3 font-semibold tracking-tight text-teal-900 border-b-2 border-teal-500 dark:text-white">
                                        Chicken biryani rice
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-2xl font-bold text-teal-900 dark:text-white">KES 999</span>
                                    <Link to="/id" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Order</Link>
                                </div>
                            </div>
                        </div> 

                        <div className="w-full max-w-sm bg-white border border-teal-200 hover:scale-105 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700">
                            <div className="flex justify-center items-center">
                                <img className="p-4 rounded-full w-48 h-48 object-cover" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="product image" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-lg pb-3 font-semibold tracking-tight text-teal-900 border-b-2 border-teal-500 dark:text-white">
                                        Chicken biryani rice
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-2xl font-bold text-teal-900 dark:text-white">KES 999</span>
                                    <Link to="/id" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Order</Link>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div>
                <div className="fixed right-20 w-96 border-2 rounded-lg">
                <div className="flex justify-center">
                    <h3 className="text-2xl text-teal-900 border-b-4 border-teal-400 text-center w-fit">Your Order(s)</h3>
                </div>
                <Checkout />
                </div>
                </div>
            </div>
        </>
    )
}