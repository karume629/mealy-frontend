export default function EditMeal(){
    return (
        <>
        <div className="container mx-auto">
        <div className="border-2 border-teal-300 rounded-lg p-4 mt-7">
                    <h2 className="text-3xl border-b-4 border-teal-300 my-5 w-fit">Edit Meal - Chicken stew curry</h2>
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
        </div>
        </>
    )
}