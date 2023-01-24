import Checkout from "./Checkout";

export default function CheckoutList(){
    return(
        <>
            <div className="container mx-auto mt-6 w-4/5">
                <div className="">
                    <div className="flex justify-center">
                        <h3 className="text-2xl text-teal-900 border-b-4 font-bold mb-7 border-teal-400 text-center w-fit">Total Order</h3>
                    </div>
                    <Checkout />
                </div>
            </div>
        </>
    )
}