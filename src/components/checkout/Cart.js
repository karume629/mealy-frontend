import { useDispatch, useSelector } from "react-redux"
import { decrementItem, incrementItem, removeFromCart } from "../../features/meals/mealSlice"

export default function Cart({title, image, subtotal, id, quantity}){
    const dispatch = useDispatch()
    console.log();
    return (
        <>
            <div className="">   
                <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img className="w-14 h-14 rounded" src={image} alt="food" />
                        <div className="font-medium dark:text-white">
                            <div>{title}</div>
                            <div className="text-sm text-black dark:text-gray-400">KES {subtotal}</div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <button onClick={() => dispatch(decrementItem(id))} className="btn btn-outline bg-white btn-sm" type="button">-</button>

                        <span className="px-2 text-black">{quantity}</span>

                        <button onClick={() => dispatch(incrementItem(id))} className="btn btn-outline bg-white btn-sm" type="button">+</button>

                        <button onClick={() => dispatch(removeFromCart(id))} className="px-2">
                            <svg fill="none" className="w-10 h-10 hover:scale-95"  stroke="red" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                            </svg>
                        </button>

                    </div>
                </div>
                <hr className="border-2 border-white my-6" />
            </div>
        </>
    )
}