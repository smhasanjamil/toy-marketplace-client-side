import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="navbar mx-auto md:container">
                <div className="navbar-logo">
                    <Link to="/"><span className='text-black'>Motor </span><span className='text-red-600'>Mart</span></Link>
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
                    <li className="navbar-item">
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/login">Login</NavLink>
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