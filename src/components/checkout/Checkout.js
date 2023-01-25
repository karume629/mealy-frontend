import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal } from "../../features/meals/mealSlice";
import Cart from "./Cart";

export default function Checkout(){
    const items = useSelector(state => state.meals)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotal())
      }, [items.cart])
    
    return (
        <>
            <div className="w-auto">
                
                <div className="p-4">
                    <div className="flex flex-col justify-center">
                        {
                            items.cart.slice(0, 3).map(item => {
                                return <Cart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} subtotal={item.subtotal} quantity={item.quantity} />
                            })
                        }
                    </div>

                        {
                            window.location.pathname === "/meals" && items.cart.length > 3 ?
                            <Link className="text-teal-500 underline hover:no-underline" to="/cart">View more</Link>
                            :
                            null
                        }
                </div>

                <hr className="border-4 border-teal-500" />
                <div className="flex flex-row justify-between items-center border-spacing-2 bg-teal-200 p-4 rounded-b-lg w-full">
                    <h2 className="text-xl text-teal-900 font-medium">TOTAL</h2>
                    <h2 className="text-xl text-teal-900 font-bold">KES {items.totalPrice}</h2>
                </div>
                
                <div className="mt-2">
                    <Link className="btn bg-teal-700 text-white btn-sm w-full" type="button" to="/order/confirm">Checkout</Link>
                </div>
            </div>
        </>
    )
}