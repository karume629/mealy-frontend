import { Link } from "react-router-dom";

export default function Checkout(){
    return (
        <>
            <div className="w-auto">
                <div className="">
                
                <div className="flex flex-col justify-center p-4">
                    <div className="">   
                        <div className="flex flex-row justify-evenly items-center">
                            <div class="flex items-center space-x-4">
                                <img class="w-14 h-14 rounded" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="food" />
                                <div class="font-medium dark:text-white">
                                    <div>Chicken biryani rice</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">KES 900</div>
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-outline btn-info btn-sm" type="button">-</button>
                                <span className="px-4">3</span>
                                <button className="btn btn-outline btn-warning btn-sm" btn-sm type="button">+</button>
                            </div>
                        </div>
                        <hr className="border-2 border-teal-300 my-6" />
                    </div>

                    <div className="">   
                        <div className="flex flex-row justify-evenly items-center">
                            <div class="flex items-center space-x-4">
                                <img class="w-14 h-14 rounded" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="food" />
                                <div class="font-medium dark:text-white">
                                    <div>Chicken biryani rice</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">KES 900</div>
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-outline btn-info btn-sm" type="button">-</button>
                                <span className="px-4">3</span>
                                <button className="btn btn-outline btn-warning btn-sm" btn-sm type="button">+</button>
                            </div>
                        </div>
                        <hr className="border-2 border-teal-300 my-6" />
                    </div>

                    <div className="">   
                        <div className="flex flex-row justify-evenly items-center">
                            <div class="flex items-center space-x-4">
                                <img class="w-14 h-14 rounded" src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="food" />
                                <div class="font-medium dark:text-white">
                                    <div>Chicken biryani rice</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">KES 900</div>
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-outline btn-info btn-sm" type="button">-</button>
                                <span className="px-4">3</span>
                                <button className="btn btn-outline btn-warning btn-sm" btn-sm type="button">+</button>
                            </div>
                        </div>
                        <hr className="border-2 border-teal-300 my-6" />
                    </div>
                    {
                        window.location.pathname == "/cart" ?
                        null:
                        <Link className="text-teal-500 underline hover:no-underline" to="/cart">View all</Link>
                    }
                </div>

                

                <hr className="border-4 border-teal-500" />
                <div className="flex flex-row justify-between items-center border-spacing-2 bg-teal-200 p-4 rounded-b-lg w-full">
                    <h2 className="text-xl text-teal-900 font-medium">SUBTOTAL</h2>
                    <h2 className="text-xl text-teal-900 font-bold">KES 1800</h2>
                </div>
                </div>
                <div className="mt-2">
                    <Link className="btn bg-teal-700 text-white btn-sm w-full" type="button" to="/payment">Checkout</Link>
                </div>
            </div>
        </>
    )
}