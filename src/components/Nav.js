import React , { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
    window.addEventListener('scroll',transitionNavBar); 
    return() => window.removeEventListener('scroll', transitionNavBar)    
    }, [])
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img 
                onClick={() => navigate("/")}
                className="nav_logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="netflix logo" />
                {/* <img 
                onClick={() => navigate("/profile") }
                className='nav_avatar'
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="login logo" /> */}
                <img 
                onClick={() => navigate("/profile") }
                className='nav_avatar'
                src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" 
                alt="login logo" />
               

            </div>
        </div>
    )
}

export default Nav
