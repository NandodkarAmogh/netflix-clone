import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileScreen.css';
import Nav from '../components/Nav';
import { selectUser } from '../features/counter/userSlice';
import { auth } from "../firebase";

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()}      className='profileScreen__signout'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
