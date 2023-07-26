import React, {useState , useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import './LoginForm.css'

export function LoginForm (props){

    const navigate = useNavigate();
    const navigatetoRegister = ()=>{
        //navigate to /register
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
const resetForm = () => {
        setEnteredEmail('');
    setEnteredPassword('');

}
    return(
        <div className="form-element1" >
            <form className="login-form1"  onSubmit={submitForm}>
                <fieldset>
                    <legend className="login-form_fieldset">Log In Form</legend>

                <div className="form_elements1">
                    <label className="labels1" htmlFor='email'>Email address:</label>
                    <input id="email" className="inputs1" type="email" name="name" value={enteredEmail} onChange={emailChangeHandler} placeholder='email address' required />
                </div>
                <div className="form_elements1">
                    <label htmlFor='password' className="labels1">Password:</label>
                    <input id='password' className="inputs1" type="password" name="password" value={enteredPassword} onChange={passwordChangeHAndler} placeholder='password' required/>
                </div>
                <div className="buttons1">
                    <button type="submit" className="button-submit1">Log In</button>
                    <button type="reset" onClick={resetForm} className='button-reset1'>Reset</button>

                </div>
                </fieldset>
            </form>
            <button onClick={navigatetoRegister} className="button-register1">Register</button>
        </div>

        )

}

export default LoginForm;