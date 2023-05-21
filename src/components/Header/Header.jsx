import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Sign-out successful");
                navigate('/login');
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <nav className="navbar mx-auto md:container">
                <div className="navbar-logo">
                    <Link to="/"><span className='text-black'>Motor</span><span className='text-red-600'>Mart</span></Link>
                </div>
                <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
                    <li className="navbar-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/all-toys">All Toys</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/my-toys">My Toys</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/add-a-toy">Add A Toy</NavLink>
                    </li>

                    <li className="navbar-item">
                        <NavLink to="/blog">Blogs</NavLink>
                    </li>
                    {!user &&
                        <li className="navbar-item">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    }
                    {!user &&
                        <li className="navbar-item">
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    }
                    {/* <li className="navbar-item">
                        {
                            user ?
                                <span className='flex md:flex-row flex-col gap-4 md:items-center'>
                                    <span><img src={user?.photoURL} alt="profile picture" className='h-10 w-10 rounded-full' /></span>
                                    <button onClick={handleLogOut} className='btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white'><Link to="/login">Log Out</Link></button>
                                </span> : <></>
                        }
                    </li> */}
                    <li className="navbar-item">
                        {user ?
                            <span className='flex flex-col md:flex-row gap-5 items-center'>
                                <div className="relative">
                                    <img src={user?.photoURL} alt="profile picute" className='h-10 w-10 rounded-full' />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        <p className="text-white text-lg font-bold">{user?.displayName}</p>
                                    </div>
                                </div>
                                <div><button onClick={handleLogOut} className='btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white'><Link to="/login">Log Out</Link></button></div>
                            </span>
                            :
                            <></>}
                    </li>
                </ul>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-icon"></span>
                    <span className="navbar-icon"></span>
                    <span className="navbar-icon"></span>
                </div>
            </nav>
        </div>
    );
};

export default Header;