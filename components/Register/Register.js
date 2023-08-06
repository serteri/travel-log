
import React, {useState , useEffect , useReducer} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './Register.css'


// const nameReducer=(state, action) =>{
//     if(action.type === 'USER_INPUT') {
//         return {value:action.val,isValid:action.val.trim().length >= 3};
//     }
//     if(action.type === 'INPUT_BLUR') {
//         return {value:state.value,isValid:state.value.trim().length > 6}
//     }
//     if(action.type === 'CLEAR_FORM') {
//         return {value:'',isValid: null}
//     }
//     return {value:'',isValid:false}
//
// }
// const surnameReducer=(state, action) =>{
//     if(action.type === 'USER_INPUT') {
//         return {value:action.val,isValid:action.val.trim().length > 3};
//     }
//     if(action.type === 'INPUT_BLUR') {
//         return {value:state.value,isValid:state.value.trim().length > 6}
//     }
//     if(action.type === 'CLEAR_FORM') {
//         return {value:'',isValid: null}
//     }
//     return {value:'',isValid:false}
//
// }
// const emailReducer=(state,action) => {
//     if(action.type === 'USER_INPUT') {
//         return {value:action.val,isValid:action.val.includes('@')};
//     }
//     if(action.type === 'INPUT_BLUR') {
//         return {value:state.value,isValid:state.value.includes('@')}
//     }
//     if(action.type === 'CLEAR_FORM') {
//         return {value:'',isValid: null}
//     }
//     return {value:'',isValid:false}
// }

// const phoneReducer=(state,action) => {
//     if(action.type === 'USER_INPUT') {
//         return {value:action.val,isValid:action.val.trim().length > 9};
//     }
//     if(action.type === 'INPUT_BLUR') {
//         return {value:state.value,isValid:state.value.trim().length > 9}
//     }
//     if(action.type === 'CLEAR_FORM') {
//         return {value:'',isValid: null}
//     }
//     return {value:'',isValid:false}
// }
// const addressReducer=(state,action) => {
//     if(action.type === 'USER_INPUT') {
//         return {value:action.val,isValid:action.val.trim().length > 25};
//     }
//     if(action.type === 'INPUT_BLUR') {
//         return {value:state.value,isValid:state.value.trim().length >25 }
//     }
//     if(action.type === 'CLEAR_FORM') {
//         return {value:'',isValid: null}
//     }
//     return {value:'',isValid:false}
// }
// const passwordReducer=(state,action) => {
//     if(action.type === 'USER_INPUT') {
//         return {value:action.val,isValid:action.val.trim().length > 6}
//     }
//     if(action.type === 'INPUT_BLUR') {
//         return {value:state.value,isValid:state.value.trim().length > 6}
//     }
//     if(action.type === 'CLEAR_FORM') {
//         return {value:'',isValid: null}
//     }
//     return {value:'',isValid:false}
//
// }



export function RegisterPage(){

    // const [nameState,dispatchName] = useReducer(nameReducer, {value:'',isValid:null});
    // const [surNameState,dispatchSurName] = useReducer(surnameReducer, {value:'',isValid:null});
    // const [emailState,dispatchEmail] = useReducer(emailReducer, {value:'',isValid:null});
    // const [phoneState,dispatchPhone] = useReducer(phoneReducer, {value:'',isValid:null});
    // const [addressState,dispatchAddress] = useReducer(addressReducer, {value:'',isValid:null});
    // const[passwordState,dispatchPassword] = useReducer(passwordReducer,{value:'',isValid:null})


    // const{isValid:emailIsValid} = emailState;
    // const {isValid:passwordIsValid} = passwordState;
    // const{isValid:addressIsValid} = addressState;
    // const {isValid:nameIsValid} = nameState;
    // const{isValid:surNameIsValid} = surNameState;
    // const {isValid:phoneIsValid} = phoneState;
    const[firstName,setFirstName]= useState('')
    const[lastName,setLastName]= useState('')
    const[email,setEmail]= useState('')
    const[address,setAddress]= useState('')
    const[phonenumber,setPhonenumber]= useState('')
    const[password,setPassword]= useState('')
    const[error,setError]= useState('')
    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        const emailCheck = setTimeout(() => {
            setError('')
        }, 6000);

        return () => {clearTimeout(emailCheck)
    }}, [firstName,lastName,email, address, phonenumber, password, error]);

    const navigate = useNavigate();
    const navigatetoLogin = ()=>{
        //navigate to /login
        navigate('/login');

    }
    const nameChangeHandler = (event) => {
        // setEnteredEmail(event.target.value

        setFirstName(event.target.value);

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const surnameChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        setLastName(event.target.value);

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
        // dispatchEmail({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const phoneChangeHandler = (event) => {
        setPhonenumber(event.target.value);
        // dispatchPhone({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
        // dispatchAddress({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
        // dispatchPassword({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const resetForm = (e) => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhonenumber('')
        setAddress('')
    }
    const postData = async ()=>{

        const postData = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            phonenumber:phonenumber,
            password:password,
            address:address
        }
        await axios.post('http://localhost:4026/register-us',postData).then(navigatetoLogin).catch(error => {setError("Email already exists!")
        })

    }

    const registerForm = async(e) => {
        e.preventDefault();
        postData()

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhonenumber('')
        setAddress('');

    }

    return(

        <div className="form-element">

                <form className="login-form"  >

                    <fieldset name="Register">
                        <legend className='register'>Register</legend>
                    <div className="form_elements">
                        <label htmlFor="Name" className='labels'>First Name:</label>
                        <input className="inputs" id="Name" type="text" placeholder="First Name" name="firstName"
                               value={firstName} onChange={nameChangeHandler}  required/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="Surname" className='labels'>Last Name:</label>
                        <input className="inputs" id="Surname" type="text" placeholder="Last name" name="lastName"
                               value={lastName} onChange={surnameChangeHandler}  required/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="email" className='labels'>Email:</label>
                        <input className="inputs" id="email" type="email" placeholder="Email" name="email"
                               value={email} onChange={emailChangeHandler}  required/>

                    </div>
                        {(error) ? <p>{error}</p> : null}
                    <div className="form_elements">
                        <label htmlFor="phonenumber" className='labels'>Phone Number:</label>
                        <input className="inputs" id="phonenumber" type="tel" placeholder="Phone Number" name="phonenumber"
                               value={phonenumber} onChange={phoneChangeHandler}  required/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="address" className='labels'>Address: </label>
                        <input className="inputs-address" id="address" type="text" placeholder="address" name="address"
                               value={address} onChange={addressChangeHandler}  required/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="password" className='labels'>Password: </label>
                        <input className="inputs" id="password" type="password" placeholder="password" name="password"
                               value={password} onChange={passwordChangeHandler} />
                    </div>

                    <div className="buttons">
                        <button type="submit" className="button-submit" onClick={registerForm} >Register</button>
                        <button type="reset" onClick={resetForm} className='button-reset'>Reset</button>

                    </div>

                    </fieldset>
                </form>


        </div>


    )

}