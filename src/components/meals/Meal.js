import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singleDayMeal } from "../../features/calendar/calendarSlice";
import { addtoCart } from "../../features/meals/mealSlice";
import Checkout from "../checkout/Checkout";
import DatePicker from 'react-date-picker';
import moment from "moment";

export default function Meals({isLoggedIn}){
    const meals = useSelector(state => state.calendar)
    const dispatch = useDispatch()
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        dispatch(singleDayMeal({
            day: value
        }))
    }, [value])

    return(
        <>
            <div className="container mx-auto mt-6 mb-14">
                
                <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Menu</h2>
                <div className="flex flex-col">
                <h2 className="text-lg">View menu for other days</h2>
                    <DatePicker format="MM-dd-y" minDate={new Date()} className="w-96 mb-2" onChange={onChange} value={value} />
                </div>
                {
                    meals.loading && 
                    <div className='flex flex-col justify-center w-full'>
                        <p className="text-2xl font-semibold">Loading Menu <span className="text-6xl animate-ping rounded-full ">...</span></p>
                    </div>
                }

                {!meals.loading && meals.error ? <div className="text-5xl text-red-700 font-bold">Oops! Looks like an error occured: {meals.error}</div> : null}

                {!meals.loading && meals.day_meals.length ? 
                (
                    <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-5">
                                                
                        {
                            meals.day_meals.map(meal => {
                                return(
                                    <div key={meal.id} className="w-full max-w-sm bg-white border border-teal-200 hover:scale-105 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700">
                                        <div className="flex justify-center items-center">
                                            <img className="p-4 rounded-full w-48 h-48 object-cover" src={meal.image} alt="meal" />
                                        </div>
                                        <div className="px-5 pb-5">
                                            <a href="#">
                                                <h5 className="text-lg pb-3 font-semibold tracking-tight text-teal-900 border-b-2 border-teal-500 dark:text-white truncate">
                                                    {meal.title}
                                                </h5>
                                            </a>
                                            <span className="text-2xl font-bold text-teal-900 dark:text-white">KES {meal.price}</span>
                                            <div className="flex items-center justify-between mt-3">
                                                <Link to={"/meals/" + meal.id + "/" + meal.title} className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">View</Link>
                                                <button onClick={() => dispatch(addtoCart(meal))} className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Order</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } 

                        </div> 
                    </div>
                <div className="fixed right-20 w-96 border-2 rounded-lg">
                    <div className="flex justify-center">
                        <h3 className="text-2xl text-teal-900 border-b-4 border-teal-400 text-center w-fit">Your Order(s)</h3>
                    </div>
                    <Checkout />
                </div>
                </div>
                )
                : 
                <h1 className="text-3xl font-bold">No meals available for this day {moment(value).format('L')}!</h1>
                }

            </div>
        </>
    )
}