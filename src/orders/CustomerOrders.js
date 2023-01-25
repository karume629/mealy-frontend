import { Link } from "react-router-dom";

export default function CustomerOrders(){
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
                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="User Avatar" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken stew curry with rice</div>
                            <div className="text-sm flex flex-row items-center">
                                <span>Quantity</span> 
                                <span className="mx-10">9</span></div>
                            </div>
                        </div>
                        </td>
                        <td>
                        KES 5870
                        <br/>
                        <span className="badge badge-teal-100 badge-sm">17/08/2022 13:39PM</span>
                        </td>
                        <td>
                            <Link className="btn btn-outline btn-info btn-sm" to="/order/id/edit">Edit</Link>
                        </td>
                        <th>
                            <button className="btn btn-outline bg-red-700 text-white btn-sm">Cancel</button>
                        </th>
                    </tr>
                    </tbody>
                    
                    </table>
                </div>
            </div>
        </>
    )
}