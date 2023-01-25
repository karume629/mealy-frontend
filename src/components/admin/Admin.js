import { Link } from "react-router-dom";

export default function Caterer({user}){
    console.log(user);
    return (
        <>
            <div className="container mx-auto mb-12">
                <div className="card p-16 border-8 border-teal-800 text-center">
                    <h1 className="text-5xl">
                        <span className="font-bold">
                            Welcome
                        </span>
                        <span className="uppercase border-b-8 border-teal-400"> {user.username}</span>
                    </h1> 
                </div>

                <div className="border-2 border-teal-300 rounded-lg p-4 mt-7">
                    <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Add New Meal</h2>
                    <form>
                        <div className="flex flex-row gap-4">
                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Title</label>
                                <input placeholder="eg. Chicken Biryani" type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input placeholder="eg. 1300" type="number" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                <input placeholder="eg. http://chicken-biriani-image.jpg" type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meal Info</label>
                            <textarea className="textarea textarea-info w-4/5" placeholder="Add an eye catching description"></textarea>
                        </div>
                        <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                    </form>
                </div>

                <div className="w-full mt-6 border-2 border-teal-300 rounded-lg p-4">
                    <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Today's Sales Data</h2>
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full border border-teal-200">
                        <Link to="/admin/orders">
                        <div className="stat hover:bg-teal-500 hover:text-white">
                            <div className="stat-title">Total Orders</div>
                            <div className="stat-value">300</div>
                        </div>
                        </Link>
                        
                        <Link to="/admin/menu">
                        <div className="stat hover:bg-teal-500 hover:text-white">
                            <div className="stat-title">Menu List</div>
                            <div className="stat-value">30</div>
                        </div>
                        </Link>
                        
                        <div className="stat hover:bg-teal-500 hover:text-white">
                            <div className="stat-title">Total Sales</div>
                            <div className="stat-value">KES 101,200</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}