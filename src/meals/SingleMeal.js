import { Link } from "react-router-dom";

export default function SingleMeal(){
    return(
        <>
            <div className="container mx-auto p-5">
                <div className="flex flex-row items-center hover:border-b-2 hover:border-teal-500 w-fit">
                    <svg fill="none" className="w-10 h-10 mx-1" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path>
                    </svg>
                    <Link className="" to="/meals">
                        Meals/Chicken-stew-with-rice
                    </Link>
                </div>

                <div className="mt-10 p-4">
                    <div className="card lg:card-side border-2 border-teal-300 rounded-lg shadow-xl p-14">
                    <figure><img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" className="rounded-lg w-full h-80" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-teal-700 text-2xl font-semibold">Chicken stew with rice</h2>
                        <p>Some Description about this cooked meal and topping added things, like salty or none salty or comes with source salad and the rest of the description continues</p>
                        

                        <div className="flex flex-row items-center">
                            <button className="btn btn-outline btn-info btn-sm text-xl text-center" type="button">-</button>
                            <span className="px-2">1</span>
                            <button className="btn btn-outline btn-warning btn-sm text-xl" btn-sm type="button">+</button>
                            <button className="px-2">
                            </button>
                        </div>
                        <p className="text-2xl font-bold text-teal-900 dark:text-white">KES 700</p>

                        <div className="card-actions">
                        <Link to="/checkout" className="btn btn-outline bg-teal-400 text-white">Add to cart</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}