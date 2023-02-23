import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singleDayMeal } from "../../features/calendar/calendarSlice";
import { addtoCart, fetchMeals } from "../../features/meals/mealSlice";
import Checkout from "../checkout/Checkout";
import DatePicker from 'react-date-picker';
import moment from "moment";
import { ToastContainer } from "react-toastify";

export default function Meals(){
    const meals = useSelector(state => state.calendar)
    const defaultMeals = useSelector(state => state.meals.meals)
    const dispatch = useDispatch()
    const [value, onChange] = useState(null);

    useEffect(() => {
        dispatch(fetchMeals())
        dispatch(singleDayMeal({
            day: value
        }))
    }, [value])
    
    return(
        <>
            <div className="container mx-auto mt-6 mb-14">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
                
                <h2 className="text-3xl font-bold my-5 w-fit">Menu</h2>
                {
                    meals.loading && 
                    <div className='flex flex-col justify-center w-full'>
                        <p className="text-2xl font-semibold">Loading Menu <span className="text-6xl animate-ping rounded-full ">...</span></p>
                    </div>
                }

                {
                    value && !meals.day_meals.length && 
                    <div className='flex flex-col justify-center w-full'>
                        <h1 className="text-2xl w-full font-semibold">{"No meals available for this day " + moment(value).format('L')}</h1>
                    </div>
                }

                {!meals.loading && meals.error ? <div className="text-5xl text-red-700 font-bold">Oops! Looks like an error occured: {meals.error}</div> : null}

                {!meals.loading && !meals.error ? 
                (
                    <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-12 xl:col-span-2">
                        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                                                
                        {
                            defaultMeals.length > 0 ?
                            value ? meals.day_meals.map(meal => {
                                return(
                                    <div style={{background: 'white'}} key={meal.id} className="w-full max-w-sm bg-white border border-[#00A082] hover:scale-105 rounded-lg shadow">
                                        <div className="flex justify-center items-center">
                                            <img className="p-4 rounded-full w-full h-auto xl:w-48 xl:h-48 object-cover" src={meal.image} alt="meal" />
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
                            
                            : defaultMeals.map(meal => {
                                return(
                                    <div style={{background: 'white'}} key={meal.id} className="w-full max-w-sm bg-white border border-[#00A082] hover:scale-105 rounded-lg shadow">
                                        <div className="flex justify-center items-center">
                                            <img className="p-4 rounded-full w-full h-60 xl:w-48 xl:h-48 object-cover" src={meal.image} alt="meal" />
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
                            :
                            <h1 className="text-2xl w-full font-semibold">Loading Meals...</h1>
                        } 

                        </div> 
                    </div>
                <div className=" xl:fixed xl:right-20 xl:w-96">
                    <div className="flex flex-col mb-4">
                    <h2 className="text-2xl font-bold">View menu for other days</h2>
                        <DatePicker format="MM-dd-y" minDate={new Date()} className="w-96 h-12 my-3" onChange={onChange} value={value} />
                    </div>

                    <div className="border-2 border-[#00A082] rounded-lg">
                    <div className="flex justify-center">
                        <h3 className="text-2xl text-black font-bold text-center mt-3 w-fit">Your Order(s)</h3>
                    </div>
                    
                    <Checkout />
                    </div>
                </div>
                </div>
                )
                : 
                null
                }

            </div>
        </>
    )
}