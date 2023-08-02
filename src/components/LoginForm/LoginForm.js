import React, {useState , useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './LoginForm.css'

export function LoginForm (props){

    const navigate = useNavigate();
    const navigatetoRegister = ()=>{
        //navigate to /register
        navigate('/register');

    }
    const navigatetoUser = ()=>{
        //navigate to /register
        navigate('/user/:userid');

    }
    const [email,setEnteredEmail]= useState('')
    const [password,setEnteredPassword]= useState('')
    const[message,setMessage]= useState('')
    const [formIsValid, setFormIsValid] = useState(false);
    const[error,setError]= useState('')

    useEffect(()=>{
       const identifier = setTimeout(()=>{
           setFormIsValid(email.includes('@') && password.trim().length > 6)
       },500)
        return () => {clearTimeout(identifier)}

    },[email,password]
    )
    const emailChangeHandler= (e) => {
        setEnteredEmail(e.target.value)
    }

    const passwordChangeHAndler= (e) => {
        setEnteredPassword(e.target.value)
    }

    const postData = async ()=>{

        const postData = {
            email:email,
            password:password,


        }
        await axios.post('http://localhost:4011/log-in',postData).then(response => console.log(response)).catch(error=>{console.log(error.message)})

    }
const submitForm = (e) => {
        e.preventDefault();
        postData();
        setEnteredEmail('')
    setEnteredPassword('')
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
                    <input id="email" className="inputs1" type="email" name="email" value={email} onChange={emailChangeHandler} placeholder='email address' required />
                </div>
                <div className="form_elements1">
                    <label htmlFor='password' className="labels1">Password:</label>
                    <input id='password' className="inputs1" type="password" name="password" value={password} onChange={passwordChangeHAndler} placeholder='password' required/>
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