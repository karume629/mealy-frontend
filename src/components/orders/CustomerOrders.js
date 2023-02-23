import moment from "moment/moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserOrders } from "../../features/users/orderSlice";

export default function CustomerOrders({user}){
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.userOrders)
    useEffect(() => {
        dispatch(getUserOrders({
            user_id: user.id
        }))
    }, [])
    
    return(
        <>
            <div className="container mx-auto mt-8">
            <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">My Order History</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Amount</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders && orders.length ?
                        orders.map(order => {
                            return (
                                <tr>
                                    <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={order.meal.image} alt="order" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{order.meal.title}</div>
                                        <div className="text-sm flex flex-row items-center">
                                            <span>Quantity</span> 
                                            <span className="mx-10">{order.quantity}</span></div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    KES {order.quantity * order.meal.price}
                                    <br/>
                                    <span className="badge badge-teal-100 badge-sm">{moment(order.updated_at).format("LLL")}</span>
                                    </td>
                                    <td>
                                        <Link className="btn btn-outline btn-info btn-sm" to="/order/id/edit">Edit</Link>
                                    </td>
                                    <th>
                                        <button className="btn btn-outline bg-red-700 text-white btn-sm">Cancel</button>
                                    </th>
                                </tr>
                            )
                        })
                        :
                        <h2>No orders available</h2>
                    }
                    </tbody>
                    
                    </table>
                </div>
            </div>
        </>
    )
}