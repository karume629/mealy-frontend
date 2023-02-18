import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { makeOrder } from "../../features/users/orderSlice";

export default function ConfirmOrder({user}){
    const meals = useSelector(state => state.meals)
    const order = useSelector(state => state.orders)
    const { handleSubmit } = useForm();
    const onSubmit = () => createOrder();

    const dispatch = useDispatch()

    function createOrder(){
        meals.cart.forEach(order => {
            dispatch(makeOrder({
                quantity: order.quantity,
                user_id: user.id,
                meal_id: order.id
            }))
        });
    }

    if (order.orderSuccess) {
        return <Navigate to="/dashboard" />
    }

    return(
        <>
            <div className="container mt-10 mx-auto w-2/4 ">
                <div className="card flex flex-col justify-center border-4 border-[#00A082] p-6">
                    <div className="flex justify-center">
                    <h1 className="text-teal-800 text-3xl text-center font-extrabold w-fit">Confirm Order</h1>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="text-teal-800 font-bold text-2xl mt-5">Total Amount To Pay</h2>
                        <h2 className="text-teal-900 font-extrabold text-2xl mt-5">KES 84200</h2>
                    </div>

                    <hr className="my-3 border-2 border-[#00A082]" />

                    <div>
                    <h2 className="text-teal-800 font-semibold text-xl underline my-5">Items</h2>

                    <ul>
                        {
                            meals.cart.map(order => {
                                return (
                                    <li className="flex flex-row justify-between items-center border-2 border-white mb-2 rounded-lg p-2">
                                        <span>{order.title}</span> <span className="text-xl font-bold">x{order.quantity}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>

                    <hr className="my-6 border-2 border-teal-200" />

                    <div className="font-bold text-red-800 text-center flex items-center justify-center">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                        </svg>
                        By clicking <span className="text-lg font-bold underline mx-1">Make Order</span> you confirm to making this purchase
                    </div>

                    <div className="flex justify-evenly items-center flex-row mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <button type="submit" className="btn bg-[#00A082] text-white">Make Order</button>
                        </form>
                        <Link to="/meals" className="btn bg-[#00A082] text-white">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </>
    )
}