import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal } from "../../features/meals/mealSlice";
import Cart from "./Cart";

export default function CheckoutList(){
    const items = useSelector(state => state.meals)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTotal())
    }, [items.cart])
    
    return(
        <>
            <div className="container mx-auto mt-6 w-4/5">
                <div className="">
                    <div className="flex justify-center">
                        <h3 className="text-2xl text-black border-b-4 font-bold mb-7  text-center w-fit">Total Order</h3>
                    </div>
                    {
                        items.cart.map(item => {
                            return <Cart id={item.id} key={item.id} title={item.title} image={item.image} subtotal={item.subtotal} quantity={item.quantity} />
                        })
                    }
                </div>

                <hr className="border-4 border-[#00A082]" />
                <div className="flex flex-row justify-between items-center border-spacing-2 bg-white p-4 rounded-b-lg w-full">
                    <h2 className="text-xl text-black font-medium">TOTAL</h2>
                    <h2 className="text-xl text-black font-bold">KES {items.totalPrice}</h2>
                </div>
                
                <div className="mt-2">
                    <Link className="btn bg-[#00A082] text-white btn-sm w-full" type="button" to="/order/confirm">Checkout</Link>
                </div>
            </div>
        </>
    )
}