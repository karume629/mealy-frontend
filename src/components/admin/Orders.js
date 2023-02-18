import { useSelector } from "react-redux"
import moment from "moment/moment";

export default function Orders({user}){
    const orders = useSelector(state => state.orders.allOrders)
    const adminOrders = orders.filter(order => order.meal.admin_id === user.id)

    const mealPrice = (price, quantity) => price * quantity
    return(
        <>
            <div className="container mx-auto mt-8">
            <h2 className="text-3xl my-5 w-fit">Full Order History</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Order</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        adminOrders.map(order => {
                            return (
                                <tr>
                                    <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={order.user.avatar} alt="User Avatar" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{order.user.first_name} {order.user.last_name}</div>
                                        <div className="text-sm opacity-50">{order.user.email}</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    {order.meal.title}
                                    <br/>
                                    <span className="badge badge-teal-100 badge-sm">{moment(order.updated_at).format('MMMM Do YYYY, h:mm a')}</span>
                                    </td>
                                    <td>{order.quantity}</td>
                                    <th>
                                    KES {mealPrice(order.quantity, order.meal.price)}
                                    </th>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}