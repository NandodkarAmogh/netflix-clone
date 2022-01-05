import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch , useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email : userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout());
      }
    })
    return unsubscribe; 
  }, [dispatch]);

  return (
    <div className="app">
      {/* <HomeScreen /> */}
      {/* 0b507d5c113cff5cde0e00499a8ae71a */}

      <BrowserRouter>
        
        {!user ? (
          <LoginScreen />
          
        ) : (
        <Routes>
          <Route 
            path="/profile" 
            element = { <ProfileScreen/>} /> 
          <Route 
            exact path="/" 
            element={<HomeScreen />} />
        </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
