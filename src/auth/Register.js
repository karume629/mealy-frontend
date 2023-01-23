import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";


const schema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required(),
    avatar: yup.string().required(),
    phone_number: yup.number().required(),
    password: yup.string().required(),
    confirm_password: yup.string().required(),
  }).required();


export default function Register({getUser}){
    const [registerSuccess, setregisterSuccess] = useState(false)
    const [registerError, setregisterError] = useState("")

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => registerUser(data);

    function registerUser(data){
        fetch("http://localhost:3000/users", {
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
                    getUser(data)
                    console.log(data.id);
                })
            }
            else{
                res.json().then(data => {
                    setregisterError(data.error)
                    console.log(data);
                })
            }
        })
    }

    if(registerSuccess){
        return <Navigate to="/" />
    }

    return(
        <>
            <div className="container mx-auto flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-5 text-4xl font-bold"><span className="border-b-4 border-teal-400">Welcome</span> to Mealy</h1>
                {registerError ? <span className="text-red-500 my-5">Error: {registerError}!</span> : false}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <div className="mb-6">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input {...register("first_name")} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input {...register("last_name")} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        

                        <div className="mb-6">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input {...register("username")} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>
                    </div>

                    <div>
                        <div className="mb-6">
                            <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input {...register("phone_number")} type="tel" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo</label>
                            <input {...register("avatar")} type="url" id="avatar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" {...register("password")} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" {...register("confirm_password")} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                <p className="mt-10">Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Login here</Link></p>
            </form>

            
            </div>
        </>
    )
}