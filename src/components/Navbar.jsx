import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearUserData } from '../utils/userSlice'

const Navbar = ({ isLoggedIn }) => {

    const user = useSelector( (store) => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout  = () => {
        dispatch(clearUserData())
        return navigate('/login')
    }

    return (
        <div className="navbar bg-base-100 shadow-sm px-8 bg-base-200">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Sport Mania</Link>
            </div>
            <div className="flex gap-4">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isLoggedIn && 
                    <div className="dropdown dropdown-end">
                       <div tabIndex={0} role="button" className="flex gap-2 items-center">
                                <div className="w-10 rounded-full btn btn-ghost btn-circle avatar">
                                    <img
                                        className="rounded-full"
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.profile ? user?.profile : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" }
                                     />
                                </div>
                                <span>{ user?.name }</span>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-2 w-52 p-2 shadow">
                                <li>
                                <Link to="/me" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                                </li>
                                <li><Link to="/teams">My Teams</Link></li>
                                <li><Link to="/my-connections">My Connections</Link></li>
                                <li><Link to="/my-request">My Request</Link></li>
                                <li><a onClick={ handleLogout }>Logout</a></li>
                            </ul>
                    </div>
                }
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/turfs" >Turfs</Link></li>
                        <li><Link to="/connections">Connections</Link></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
