import { Link } from "react-router-dom";

export default function MealList(){
    return(
        <>
            <div className="container mx-auto mt-8">
            <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Your Menu List</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Meal Name</th>
                        <th>Price</th>
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
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://miro.medium.com/max/770/0*4wumHkmkVKG38b5l.jpg" alt="Food" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Chicken Curry with Rice</div>
                            </div>
                        </div>
                        </td>
                        <td className="font-bold">
                        KES 700
                        </td>
                        <td>
                            <Link className="border-2 border-teal-500 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white" to="/admin/menu/edit/id">Edit</Link>
                        </td>
                        <th>
                        <button className="btn bg-red-600 btn-sm text-white hover:bg-transparent hover:text-teal-900" type="button">Delete</button>
                        </th>
                    </tr>
                    </tbody>
                    
                    </table>
                </div>
            </div>
        </>
    )
}