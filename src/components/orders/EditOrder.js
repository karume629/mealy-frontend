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

    return(
        <>
            <div className="container mx-auto p-5">
            <h2 className="text-3xl mt-5 w-fit text-center">Edit Order</h2>
            <div className="mt-10 p-4">
                    <div className="card lg:card-side border-2 border-[#00A082] rounded-lg shadow-xl p-14">
                    <figure><img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" className="rounded-lg w-full h-80" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-2xl font-semibold">{Object.keys(order.singleOrder).length ? order.singleOrder.meal.title : "Meal Title"}</h2>
                        <p>{Object.keys(order.singleOrder).length ? order.singleOrder.meal.description : "Meal Description"}</p>
                        

                        <div className="flex flex-row items-center">
                        <button onClick={() => dispatch(decrementItem(order.singleOrder.id))} className="btn btn-outline bg-white btn-sm" type="button">-</button>
                            <span className="px-2">{order.singleOrder.quantity}</span>
                            <button onClick={() => dispatch(incrementItem(order.singleOrder.id))} className="btn btn-outline bg-white btn-sm" type="button">+</button>
                            <button className="px-2">
                            </button>
                        </div>
                        <p className="text-2xl font-bold text-black">KES {order.total}</p>

                        <div className="card-actions">
                            <button className="btn bg-[#00A082] text-white">Re-order</button>
                            <button className="btn bg-red-700 text-white">Delete order</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}