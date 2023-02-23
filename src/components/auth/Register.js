import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";


const schema = yup.object({

  }).required();


export default function Register({getUser}){
    const [registerSuccess, setregisterSuccess] = useState(false)
    const [registerError, setregisterError] = useState("")
    const [loader, setloader] = useState(false)

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => registerUser(data);

    function registerUser(data){
        setloader(true)
        fetch("http://104.198.243.254:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status === 201){
                res.json().then(data => {
                    setregisterSuccess(true)
                    setloader(false)
                    getUser(data)
                    console.log(data.id);
                })
            }
            else{
                res.json().then(data => {
                    setregisterError(data.error)
                    setloader(false)
                    console.log(data);
                })
            }
        })
    }

    if(registerSuccess){
        return <Navigate to="/dashboard" />
    }

    return(
        <>
            <div className="container mx-auto flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-5 text-4xl font-bold"><span className="">Welcome</span> to Mealy</h1>
                {registerError ? <span className="text-red-500 my-5">Error: {registerError}!</span> : false}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <div className="mb-6">
                            <label htmlhtmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input {...register("first_name")} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlhtmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input {...register("last_name")} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlhtmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" {...register("confirm_password")} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                    </div>

                    <div>

                        <div className="mb-6">
                            <label htmlhtmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input {...register("username")} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlhtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlhtmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" {...register("password")} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-[#00A082] hover:bg-[#00A082] text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        {
                            loader ?
                            <div className="flex items-center justify-center">
                                <div
                                    className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span
                                    >
                                </div>
                                </div>
                                :
                                "Register"
                        }
                    </button>
                </div>
                <p className="mt-10">Already have an account? <Link className="hover:underline" to="/login">Login here</Link></p>
            </form>

            
            </div>
        </>
    )
}