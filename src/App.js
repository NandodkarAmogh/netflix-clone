import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const user = null;

  return (
    <div className="app">
      {/* <HomeScreen /> */}
      {/* 0b507d5c113cff5cde0e00499a8ae71a */}

      <BrowserRouter>
        
          {!user ? (
            <LoginScreen />
            // <Route path="login" element ={<LoginScreen />} />
          ) : (
          <Routes>  
            <Route 
              exact path="/" 
              element={<HomeScreen />} />
          </Routes>
          )}
          
          {/* <Route path="users" element={<Users />}>
            <Route path="/" element={<UsersIndex />} />
            <Route path=":id" element={<UserProfile />} />
            <Route path="me" element={<OwnUserProfile />} /> */}
          {/* </Route> */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
