import { Link } from "react-router-dom";

export default function EditOrder(){
    return(
        <>
            <div className="container mx-auto p-5">
            <h2 className="text-3xl border-b-4 border-teal-300 mt-5 w-fit text-center">Edit Order</h2>
            <div className="mt-10 p-4">
                    <div className="card lg:card-side border-2 border-teal-300 rounded-lg shadow-xl p-14">
                    <figure><img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" className="rounded-lg w-full h-80" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-teal-700 text-2xl font-semibold">Chicken stew with rice</h2>
                        <p>Some Description about this cooked meal and topping added things, like salty or none salty or comes with source salad and the rest of the description continues</p>
                        

                        <div className="flex flex-row items-center">
                            <button className="btn btn-outline btn-info btn-sm text-xl text-center" type="button">-</button>
                            <span className="px-2">5</span>
                            <button className="btn btn-outline btn-warning btn-sm text-xl" type="button">+</button>
                            <button className="px-2">
                            </button>
                        </div>
                        <p className="text-2xl font-bold text-teal-900 dark:text-white">KES 1700</p>

                        <div className="card-actions">
                            <button className="btn btn-outline bg-teal-400 text-white">Re-order</button>
                            <button className="btn btn-outline bg-red-700 text-white">Delete order</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}