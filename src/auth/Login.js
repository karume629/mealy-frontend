import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";


const schema = yup.object({
    username: yup.string().required(),
  }).required();



export default function Login({getUser}){
    const [loginSuccess, setloginSuccess] = useState(false)
    const [loginError, setloginError] = useState("")

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => loginUser(data);

    function loginUser(data){
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status === 201){
                res.json().then(data => {
                    setloginSuccess(true)
                    getUser(data)
                    console.log(data.id);
                })
            }
            else{
                res.json().then(data => {
                    setloginError(data.error)
                    console.log(data);
                })
            }
        })
    }

    if(loginSuccess){
        return <Navigate to="/dashboard" />
    }

    return(
        <>
            <div className="container mx-auto flex items-center justify-center mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="my-8 text-4xl font-bold"><span className="border-b-4 border-teal-400">Hello,</span> Welcome Back...</h1>
                {loginError ? <span className="text-red-500 my-5">Error: {loginError}!</span> : false}
                <div className="mb-6">
                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                    <input {...register("username")} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                </div>
                <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" {...register("password")} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <p className="mt-10">Don't have an account? <Link className="text-blue-500 hover:underline" to="/register">Register here</Link></p>
            </form>

            
            </div>
        </>
    )
}