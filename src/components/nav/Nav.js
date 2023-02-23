import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav({isLoggedIn, user, logout}){
    const items = useSelector(state => state.meals)
    const cartCount = items.cart.length
    return(
        <>
        <div className="navbar bg-{#FFC244} px-9 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/">Home</Link></li>
                    <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/meals">Meals</Link></li>
                    {
                    user.is_admin ? 
                    <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/admin">Admin Dashboard</Link></li>
                    :
                    null
                }
                </ul>
                </div>
                <Link to="/" className="font-extrabold text-4xl hover:text-white text-[#00A082]">MEALY</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/">Home</Link></li>
                <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/meals">Meals</Link></li>
                {
                    user.is_admin ? 
                    <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/admin">Admin Dashboard</Link></li>
                    :
                    null
                }
                </ul>
            </div>
            <div className="navbar-end">
            {
                isLoggedIn ? 
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cartCount}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                            <span className="font-bold text-lg">{cartCount} Items</span>
                            <span className="text-teal-600 font-bold">Total: KES {items.totalPrice}</span>
                            <div className="card-actions">
                                <Link  to="/cart" className="btn bg-[#00A082] btn-block">View cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={user.avatar} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            {
                                user.is_admin ?
                                <Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline justify-between" to="/admin" >
                                    Dashboard
                                </Link>
                                :
                                <Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline justify-between" to="/dashboard" >
                                Dashboard
                                </Link>

                            }
                            </li>
                            <li><a className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline justify-between" onClick={logout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            : 
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/login">Login</Link></li>
                    <li tabIndex={0}>
                    <Link className="hover:text-[#00A082] font-semibold text-xl hover:bg-transparent hover:underline" to="/register">Register</Link>
                    </li>
                </ul>
            }
            </div>
            </div>
        </>
    )
}