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
    const [loader, setloader] = useState(false)

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => loginUser(data);

    function loginUser(data){
        setloader(true)
        fetch("http://104.198.243.254:3000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status === 201){
                res.json().then(data => {
                    setloader(false)
                    setloginSuccess(true)
                    sessionStorage.setItem('user_id', JSON.stringify(data.id));
                    getUser(data)
                })
            }
            else{
                res.json().then(data => {
                    setloginError(data.error)
                    setloader(false)
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
                <h1 className="my-8 text-4xl font-bold">Welcome Back...</h1>
                {loginError ? <span className="text-red-500 my-5">Error: {loginError}!</span> : false}
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                    <input {...register("username")} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" {...register("password")} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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
                                "Login"
                        }
                    </button>
                </div>
                <p className="mt-10">Don't have an account? <Link className=" hover:underline" to="/register">Register here</Link></p>
            </form>

            
            </div>
        </>
    )
}