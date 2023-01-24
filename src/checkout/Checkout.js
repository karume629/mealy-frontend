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

                            <div className="flex flex-row items-center">
                                <button className="btn btn-outline btn-info btn-sm" type="button">-</button>
                                <span className="px-2">3</span>
                                <button className="btn btn-outline btn-warning btn-sm" btn-sm type="button">+</button>
                                <button className="px-2">
                                    <svg fill="none" className="w-10 h-10 hover:scale-95"  stroke="red" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                    </svg>
                                </button>
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

                            <div className="flex flex-row items-center">
                                <button className="btn btn-outline btn-info btn-sm" type="button">-</button>
                                <span className="px-2">3</span>
                                <button className="btn btn-outline btn-warning btn-sm" btn-sm type="button">+</button>
                                <button className="px-2">
                                    <svg fill="none" className="w-10 h-10 hover:scale-95"  stroke="red" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                    </svg>
                                </button>
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

                            <div className="flex flex-row items-center">
                                <button className="btn btn-outline btn-info btn-sm" type="button">-</button>
                                <span className="px-2">3</span>
                                <button className="btn btn-outline btn-warning btn-sm" btn-sm type="button">+</button>
                                <button className="px-2">
                                    <svg fill="none" className="w-10 h-10 hover:scale-95"  stroke="red" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                    </svg>
                                </button>
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
                    <Link className="btn bg-teal-700 text-white btn-sm w-full" type="button" to="/order/confirm">Checkout</Link>
                </div>
            </div>
        </>
    )
}