import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addtoCart, fetchMealById, removeFromCart } from "../../features/meals/mealSlice";

export default function SingleMeal(){
    const meal = useSelector(state => state.meals.singleMeal)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMealById(id))
    }, [])
    

    return(
        <>
            <div className="container mx-auto p-5">
                <div className="flex flex-row items-center hover:border-b-2 hover:border-teal-500 w-fit">
                    <svg fill="none" className="w-10 h-10 mx-1" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path>
                    </svg>
                    <Link className="" to="/meals">
                        Meals/{meal.title}
                    </Link>
                </div>

                <div className="mt-10 p-4">
                    <div className="card lg:card-side border-2 border-teal-300 rounded-lg shadow-xl p-14">
                    <figure><img src={meal.image} className="rounded-lg w-full h-80" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-teal-700 text-2xl font-semibold">Chicken stew with rice</h2>
                        <p>{meal.description}</p>
                        
{/* 
                        <div className="flex flex-row items-center">
                            <button className="btn btn-outline btn-info btn-sm text-xl text-center" type="button">-</button>
                            <span className="px-2">1</span>
                            <button className="btn btn-outline btn-warning btn-sm text-xl" type="button">+</button>
                            <button className="px-2">
                            </button>
                        </div> */}
                        <p className="text-2xl font-bold text-teal-900 dark:text-white">KES 700</p>

                        <div className="card-actions">
                        <button onClick={() => dispatch(addtoCart(meal.id))} className="btn btn-outline bg-teal-400 text-white">Add to cart</button>
                        <button onClick={() => dispatch(removeFromCart(meal.id))} 
                        className="btn btn-outline bg-red-600 text-white">Remove from cart</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}