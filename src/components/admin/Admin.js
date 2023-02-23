import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addMeal } from "../../features/admin/adminMealSlice";
import { ToastContainer } from 'react-toastify';
import { fetchAdminMeals } from "../../features/admin/adminMealSlice";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { createCalendar } from "../../features/calendar/calendarSlice";
import { getAllOrders } from "../../features/users/orderSlice";


export default function Caterer({user}){
    
    const data = useSelector(state => state.adminMeals)
    const orders = useSelector(state => state.orders.allOrders)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => addNewMeal(data);
    const loader = useSelector(state => state.adminMeals.loading)

    async function addNewMeal(data) {
        const res = await dispatch(createCalendar({
            day: "0000-00-00"
        }))
        data.admin_id = user.id  
        data.calendar_id = res.payload.id
        await dispatch(addMeal(data))
        document.querySelector('form').reset()
    }

    const adminOrders = orders.filter(order => order.meal.admin_id === user.id)

    const daysTotal = adminOrders.reduce((acc, item) => {
        const date = moment(new Date()).format("MMM Do YY")
        let orderDate = moment(item.updated_at).format("MMM Do YY")
        if (date == orderDate) return acc + item.meal.price * item.quantity
        return 0
    }, 0)

    useEffect(() => {
        dispatch(fetchAdminMeals({
            admin_id: user.id,
        }))
        dispatch(getAllOrders())
    }, [])


    return (
        <>
        <ToastContainer
            position="top-center"
            autoClose={6000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            />

            <div className="container mx-auto mb-12">
                <div className="card p-16 border-8 border-black text-center">
                    <h1 className="text-5xl">
                        <span className="font-bold">
                            Welcome
                        </span>
                        <span className="uppercase border-b-8 border-[#00A082]"> {user.username}</span>
                    </h1> 
                </div>

                <div className="border-4 border-[#00A082]  rounded-lg p-4 mt-7">
                    <h2 className="text-3xl my-5 w-fit">Add New Meal</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row gap-4">
                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Title</label>
                                <input {...register("title")} placeholder="eg. Chicken Biryani" type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input {...register("price")} placeholder="eg. 1300" type="number" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                <input {...register("image")} placeholder="eg. http://chicken-biriani-image.jpg" type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meal Info</label>
                            <textarea {...register("description")} className="textarea textarea-info w-4/5" placeholder="Add an eye catching description"></textarea>
                        </div>

                        <button type="submit" className="text-white bg-[#00A082] hover:bg-[#00A082] px-3 py-2 rounded-lg">
                        {
                        loader ?
                        <div className="flex items-center justify-center">
                            <div
                                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span
                                >
                            </div>
                            </div>
                            :
                            "Submit"
                    }
                        </button>
                    </form>
                </div>

                <div className="w-full mt-6 border-4 border-[#00A082] rounded-lg p-4">
                    <h2 className="text-3xl my-5 w-fit">Today's Sales Data</h2>
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full border border-teal-200">
                        <Link to="/admin/orders">
                        <div className="stat hover:bg-teal-500 hover:text-white">
                            <div className="stat-title">Total Orders</div>
                            <div className="stat-value">{adminOrders.length}</div>
                        </div>
                        </Link>
                        
                        <Link to="/admin/menu">
                        <div className="stat hover:bg-teal-500 hover:text-white">
                            <div className="stat-title">Menu List</div>
                            <div className="stat-value">{data.meals.length}</div>
                        </div>
                        </Link>
                        
                        <div className="stat hover:bg-teal-500 hover:text-white">
                            <div className="stat-title">Today's Total Sales</div>
                            <div className="stat-value">KES {daysTotal}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}