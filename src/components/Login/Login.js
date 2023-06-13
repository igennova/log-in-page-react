import React, { useState,useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const emailHandler=(state,action)=>{
  if (action.type==="hello"){
    return{
      value:action.val,
      isValid:action.val.includes("@")
    }
  }

if (action.type="bye"){
  return{
    value:state.value
    ,
    isValid:state.value.includes("@")

  }
}
return{
  value:"",
  isValid:false
}
}
const passwordHandler=(state,action)=>{
  if (action.type==="hello"){
    return{
      value:action.val,
      isValid:action.val.trim().length>6
    }
  }

if (action.type="bye"){
  return{
    value:state.value
    ,
    isValid:state.value.trim().length>6

  }
}
return{
  value:"",
  isValid:false
}
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[email, disemail]=useReducer(emailHandler,
    {
      value:"",
      isValid:null
    });
    const[pass, dispass]=useReducer(passwordHandler,
      {
        value:"",
        isValid:null
      });
  

  // useEffect(()=>{
  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   );


  // }, [enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    disemail({type:"hello" , val: event.target.value})
    
    setFormIsValid(
    event.target.value.includes('@') && pass.isValid)
   
  };

  const passwordChangeHandler = (event) => {
    dispass({type:"hello" , val: event.target.value})
    
    setFormIsValid(
     email.isValid && pass.isValid
      )

    
  };

  const validateEmailHandler = () => {
   disemail({type:"bye"})
  };

  const validatePasswordHandler = () => {
    dispass({type:"bye"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email.value, pass.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pass.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pass.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
