import React, { useState ,useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './components/Store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const b=localStorage.getItem("a")
    if(b==="1"){
      setIsLoggedIn(true);
    }


  } ,[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("a","1")
    setIsLoggedIn(true);
    
  };

  const logoutHandler = () => {
    localStorage.removeItem("a")
    setIsLoggedIn(false);
  
  };

  return (
    <Authcontext.Provider
    value={{
      isLoggedIn:isLoggedIn
    }}>
    
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Authcontext.Provider>
    
  );
}

export default App;
