import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import { deleteOrder, getUserOrders, reset } from "../../features/users/orderSlice";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";

export default function Dashboard({user}){
    const [index, setIndex] = useState(0)
    const orders = useSelector(state => state.orders.userOrders)
    const dispatch = useDispatch()

    function cancel(){
        dispatch(deleteOrder(sortedOrder[0].id))
        toast.info(`You order ${sortedOrder[0].meal.title} cancelled`)
    }

    let sortedOrder;

    if (orders.length > 0){
        sortedOrder = [...orders]
        sortedOrder.sort((itemA, itemB) => {
			return itemB.updated_at.localeCompare(itemA.updated_at);
		});
    }

    const TEXTS = [
        "Welcome",
        "Hello",
        "Greetings"
    ]

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        
        dispatch(getUserOrders({
            user_id: user.id
        }))

        dispatch(reset())

        return () => clearTimeout(intervalId);
    }, [])

    const ordersTotal = orders.reduce((acc, item) => {
        return acc + item.meal.price * item.quantity
    }, 0)

    const calcOrderPrice = (price, quantity) => price * quantity
    
    return (
        <>
            <div className="container mx-auto">
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
                <div className="card p-24 border-8 border-teal-800">
                {
                    user.username ?
                    <>
                        <h1 className="text-8xl">
                            <span className="font-bold">
                                <TextTransition springConfig={presets.wobbly}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </span>
                        <span className="uppercase border-b-8 border-teal-400">{user.first_name} {user.last_name}</span>
                        </h1> 
                    </>
                    :
                    <h1 className="font-bold text-5xl text-center">Login to view your dashboard </h1>
                }
                </div>

                <div className="">
                    <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Activity Summary</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="stats shadow border-2 border-teal-600 text-center">
                            <div className="stat">
                                <div className="stat-title">Total Orders</div>
                                <div className="stat-value text-6xl">{orders.length}</div>
                            </div>
                        </div>

                        <div className="stats bg-teal-400 text-primary-content">
    
                            <div className="stat">
                                <div className="stat-title">Total amount spent</div>
                                <div className="stat-value">KES {ordersTotal}</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-title">Current order</div>
                                <div className="stat-value">KES {
                                    sortedOrder && sortedOrder.length? calcOrderPrice(sortedOrder[0].meal.price, sortedOrder[0].quantity) : 0
                                }</div>
                                <div className="stat-actions">
                                <button onClick={cancel} className="btn bg-red-600 btn-sm">Cancel</button> 
                                {
                                    sortedOrder && sortedOrder.length ?
                                    <Link to={"/order/" + sortedOrder[0].id + "/edit"} className="btn btn-outline btn-sm mx-4">Edit order</Link>
                                    :
                                    <p>No orders</p>
                                }
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="mb-10 mt-3">
                        <h5 className="text-3xl border-b-4 border-teal-300 my-5 w-fit mb-4">
                            Order History
                        </h5>
                        <div className="border-2 border-teal-300 p-3 rounded-2xl w-auto">                            
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                                {
                                    sortedOrder && sortedOrder.length ?
                                    sortedOrder.slice(0,3).map(order => {
                                        return (
                                            <li key={order.id} className="mb-5 ml-4">
                                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{moment(order.updated_at).startOf('day').fromNow()}</time>
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{order.meal.title}</h3>
                                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">KES {calcOrderPrice(order.meal.price, order.quantity)}</p>
                                            </li>
                                        )
                                    })
                                    :
                                    <li className="mb-5 ml-4">Your order history will appear here</li>
                                }
                            </ol>

                            {
                                sortedOrder && sortedOrder.length > 3 &&
                                <Link to="/katy/orders" className="text-teal-600 text-base underline">View all</Link>
                            }
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}