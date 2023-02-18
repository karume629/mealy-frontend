import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { decrementItem, incrementItem } from "../../features/meals/mealSlice";
import { getSingleOrder } from "../../features/users/orderSlice";

export default function EditOrder(){
    const { id } = useParams()
    const dispatch = useDispatch()
    const order = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getSingleOrder(id))
    }, [id])

    console.log(order);
    

    return(
        <>
            <div className="container mx-auto p-5">
            <h2 className="text-3xl border-b-4 border-teal-300 mt-5 w-fit text-center">Edit Order</h2>
            <div className="mt-10 p-4">
                    <div className="card lg:card-side border-2 border-teal-300 rounded-lg shadow-xl p-14">
                    <figure><img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" className="rounded-lg w-full h-80" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-teal-700 text-2xl font-semibold">{order.singleOrder.meal.title}</h2>
                        <p>{order.singleOrder.meal.description}</p>
                        

                        <div className="flex flex-row items-center">
                        <button onClick={() => dispatch(decrementItem(order.singleOrder.id))} className="btn btn-outline btn-info btn-sm" type="button">-</button>
                            <span className="px-2">{order.singleOrder.quantity}</span>
                            <button onClick={() => dispatch(incrementItem(order.singleOrder.id))} className="btn btn-outline btn-warning btn-sm" type="button">+</button>
                            <button className="px-2">
                            </button>
                        </div>
                        <p className="text-2xl font-bold text-teal-900 dark:text-white">KES {order.total}</p>

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