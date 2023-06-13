import React,{useContext} from 'react';

import classes from './Navigation.module.css';
import Authcontext from '../Store/auth-context';

const Navigation = () => {
   const h =useContext(Authcontext);
  return (
    <nav className={classes.nav}>
      <ul>
        {h.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {h.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {h.isLoggedIn && (
          <li>
            <button onClick={h.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
