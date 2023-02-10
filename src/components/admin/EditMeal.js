import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { fetchMealById } from "../../features/meals/mealSlice"
import { useForm } from "react-hook-form";
import { editMeal } from "../../features/admin/adminMealSlice";
import { toast, ToastContainer } from "react-toastify";

export default function EditMeal(){
    const data = useSelector(state => state.meals)
    const adminData = useSelector(state => state.adminMeals)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(fetchMealById(id))
    }, [id])

    const onSubmit = (data) => patchMeal(data);

    async function patchMeal(newData) {
        let updatedObj = {
            id: data.singleMeal.id,
            title: newData.title || data.singleMeal.title,
            price: newData.price || data.singleMeal.price,
            image: newData.image || data.singleMeal.image,
            description: newData.description || data.singleMeal.description
        }
        await dispatch(editMeal(updatedObj))
        await toast.info(`Your meal is updated`);
        setTimeout(() => {
            navigate("/admin/menu")
        }, 3000);
    }
    
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
        <div className="container mx-auto">
        <div className="border-2 border-teal-300 rounded-lg p-4 mt-7">
                    <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Edit Meal - {data.singleMeal.title}</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row gap-4">
                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Title</label>
                                <input {...register("title")} placeholder={data.singleMeal.title} type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input {...register("price")} placeholder={data.singleMeal.price} type="number" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                <input {...register("image")} placeholder={data.singleMeal.image} type="url" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meal Info</label>
                            <textarea {...register("description")} className="textarea textarea-info w-4/5" placeholder={data.singleMeal.description}></textarea>
                        </div>
                        <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                    </form>
                </div>
        </div>
        </>
    )
}