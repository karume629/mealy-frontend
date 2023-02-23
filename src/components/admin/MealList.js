import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { deleteMeal, editMeal, fetchAdminMeals, updateRemovedMeal } from "../../features/admin/adminMealSlice";
import DatePicker from 'react-date-picker';
import { useForm } from "react-hook-form";
import { createCalendar } from "../../features/calendar/calendarSlice";

export default function MealList({user}){
    const data = useSelector(state => state.adminMeals)
    const dispatch = useDispatch()
    const [value, onChange] = useState(new Date());
    const [mealObj, setmealObj] = useState({})
    const { register, handleSubmit } = useForm();

    const onSubmit = (mealData) => updateDate(mealData);

    useEffect(() => {
        dispatch(fetchAdminMeals({
            admin_id: user.id,
        }))
    }, [])

    function deleteItem(id){
        dispatch(deleteMeal(id))
        dispatch(updateRemovedMeal(id))
    }

    function getMealObj(meal){
        setmealObj(meal)
    }

    async function updateDate(){
        const res = await dispatch(createCalendar({
            day: value
        }))
        
        let newObj = {
            id: mealObj.id,
            calendar_id: res.payload.id
        }
        await dispatch(editMeal(newObj))
        toast.info("Menu updated!")
    }
    

    return(
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
            <div className="container mx-auto mt-8">
            <h2 className="text-3xl my-5 w-fit">Your Menu List</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Meal Name</th>
                        <th>Price</th>
                        <th></th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.meals.map(meal => {
                                return (
                                    <tr key={meal.id}>
                                        <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={meal.image} alt="Food" />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold">{meal.title}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="font-bold">
                                        KES {meal.price}
                                        </td>
                                        <td>
                                            <Link className="border-2 border-[#00A082] py-1 px-3 rounded-md hover:bg-[#00A082] hover:text-white" 
                                            to={"/admin/menu/edit/" + meal.id}>Edit</Link>
                                        </td>
                                        <td>
                                        <label onClick={() => getMealObj(meal)} htmlFor="my-modal" className="btn btn-outline btn-sm px-3 text-black hover:bg-[#00A082] hover:text-white capitalize" type="button">Add to menu</label>
                                        </td>
                                        <th>
                                        <button onClick={() => deleteItem(meal.id)} className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900 capitalize" type="button">Delete</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    
                    </table>
                </div>
            </div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-fit">
                <h3 className="font-bold text-2xl border-b-2 border-teal-400 mb-3">Choose Date</h3>
                <h3 className="text-xl">{mealObj.title} - KES {mealObj.price}</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="h-72">
                    <DatePicker format="MM-dd-y" minDate={new Date()} required={true} className="w-72 my-3" onChange={onChange} value={value} />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn bg-red-500 btn-outline text-white btn-sm">Close</label>
                        <button className="btn bg-teal-400 btn-sm">Confirm</button>
                    </div>
                </form>
            </div>
            </div>

        </>
    )
}