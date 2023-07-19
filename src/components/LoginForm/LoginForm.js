import React, {useState , useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import './LoginForm.css'

export function LoginForm (props){

    const navigate = useNavigate();
    const navigatetoRegister = ()=>{
        //navigate to /login
        navigate('/register');

    }
    const [enteredEmail,setEnteredEmail]= useState('')
    const [enteredPassword,setEnteredPassword]= useState('')
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(()=>{
       const identifier = setTimeout(()=>{
           setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6)
       },500)
        return () => {clearTimeout(identifier)}

    },[enteredEmail,enteredPassword]
    )
    const emailChangeHandler= (e) => {
        setEnteredEmail(e.target.value)
    }

    const passwordChangeHAndler= (e) => {
        setEnteredPassword(e.target.value)
    }
const submitForm = (e) => {
        e.preventDefault();

}
const resetForm = (e) => {
        setEnteredEmail('');
    setEnteredPassword('');

}
    return(
        <div className="form-element" >
            <form className="login-form"  onSubmit={submitForm}>
                <div className="form_elements">
                    <label className="labels">Email address:</label>
                    <input className="inputs" type="text" name="name" value={enteredEmail} onChange={emailChangeHandler} required />
                </div>
                <div className="form_elements">
                    <label className="labels">Password:</label>
                    <input className="inputs" type="password" name="password" value={enteredPassword} onChange={passwordChangeHAndler} required/>
                </div>
                <div className="buttons">
                    <button type="submit" className="button-submit">Log In</button>
                    <button type="reset" onClick={resetForm}>Reset</button>

                </div>

            </form>
            <button onClick={navigatetoRegister} className="button-register">Register</button>
        </div>

        )

}

export default LoginForm;