
import React, {useState , useEffect , useReducer} from 'react';
import './Register.css'


const nameReducer=(state, action) =>{
    if(action.type === 'USER_INPUT') {
        return {value:action.val,isValid:action.val.trim().length >= 3};
    }
    if(action.type === 'INPUT_BLUR') {
        return {value:state.value,isValid:state.value.trim().length > 6}
    }
    if(action.type === 'CLEAR_FORM') {
        return {value:'',isValid: null}
    }
    return {value:'',isValid:false}

}
const surnameReducer=(state, action) =>{
    if(action.type === 'USER_INPUT') {
        return {value:action.val,isValid:action.val.trim().length > 3};
    }
    if(action.type === 'INPUT_BLUR') {
        return {value:state.value,isValid:state.value.trim().length > 6}
    }
    if(action.type === 'CLEAR_FORM') {
        return {value:'',isValid: null}
    }
    return {value:'',isValid:false}

}
const emailReducer=(state,action) => {
    if(action.type === 'USER_INPUT') {
        return {value:action.val,isValid:action.val.includes('@')};
    }
    if(action.type === 'INPUT_BLUR') {
        return {value:state.value,isValid:state.value.includes('@')}
    }
    if(action.type === 'CLEAR_FORM') {
        return {value:'',isValid: null}
    }
    return {value:'',isValid:false}
}

const phoneReducer=(state,action) => {
    if(action.type === 'USER_INPUT') {
        return {value:action.val,isValid:action.val.trim().length > 9};
    }
    if(action.type === 'INPUT_BLUR') {
        return {value:state.value,isValid:state.value.trim().length > 9}
    }
    if(action.type === 'CLEAR_FORM') {
        return {value:'',isValid: null}
    }
    return {value:'',isValid:false}
}
const addressReducer=(state,action) => {
    if(action.type === 'USER_INPUT') {
        return {value:action.val,isValid:action.val.trim().length > 25};
    }
    if(action.type === 'INPUT_BLUR') {
        return {value:state.value,isValid:state.value.trim().length >25 }
    }
    if(action.type === 'CLEAR_FORM') {
        return {value:'',isValid: null}
    }
    return {value:'',isValid:false}
}
const passwordReducer=(state,action) => {
    if(action.type === 'USER_INPUT') {
        return {value:action.val,isValid:action.val.trim().length > 6}
    }
    if(action.type === 'INPUT_BLUR') {
        return {value:state.value,isValid:state.value.trim().length > 6}
    }
    if(action.type === 'CLEAR_FORM') {
        return {value:'',isValid: null}
    }
    return {value:'',isValid:false}

}



export function RegisterPage(){

    const [nameState,dispatchName] = useReducer(nameReducer, {value:'',isValid:null});
    const [surNameState,dispatchSurName] = useReducer(surnameReducer, {value:'',isValid:null});
    const [emailState,dispatchEmail] = useReducer(emailReducer, {value:'',isValid:null});
    const [phoneState,dispatchPhone] = useReducer(phoneReducer, {value:'',isValid:null});
    const [addressState,dispatchAddress] = useReducer(addressReducer, {value:'',isValid:null});
    const[passwordState,dispatchPassword] = useReducer(passwordReducer,{value:'',isValid:null})
    const [formIsValid, setFormIsValid] = useState(false);

    const{isValid:emailIsValid} = emailState;
    const {isValid:passwordIsValid} = passwordState;
    const{isValid:addressIsValid} = addressState;
    const {isValid:nameIsValid} = nameState;
    const{isValid:surNameIsValid} = surNameState;
    const {isValid:phoneIsValid} = phoneState;


    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity!');
            setFormIsValid(
                emailIsValid && passwordIsValid && nameIsValid && surNameIsValid && addressIsValid && phoneIsValid
            );
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid,nameIsValid,surNameIsValid,phoneIsValid,addressIsValid])
    const nameChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchName({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const surnameChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchSurName({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const phoneChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchPhone({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };
    const addressChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchAddress({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({type:'USER_INPUT',val:event.target.value});

        // setFormIsValid(
        //   emailState.isValid && event.target.value.trim().length > 6
        // );
    };
    const validateNames = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchName({type:'INPUT_BLUR'});
    };
    const validateSurname = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchSurName({type:'INPUT_BLUR'});
    };
    const validateEmail = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({type:'INPUT_BLUR'});
    };
    const validatePhone = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchPhone({type:'INPUT_BLUR'});
    };

    const validateAddress = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchAddress({type:'INPUT_BLUR'});
    };

    const validatePassword = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchPassword({type:'INPUT_BLUR'});
    };
    const resetForm = (e) => {
        dispatchEmail({type:'CLEAR_FORM'});
        dispatchPassword({type:'CLEAR_FORM'});
        dispatchPhone({type:'CLEAR_FORM'});
        dispatchName({type:'CLEAR_FORM'});
        dispatchSurName({type:'CLEAR_FORM'});
        dispatchAddress({type:'CLEAR_FORM'});

    }
    const registerForm =(e) => {
        e.preventDefault();

    }

    return(

        <div className="form-element">

                <form className="login-form" onSubmit={registerForm}>

                    <fieldset name="Register">
                        <legend className='register'>Register</legend>
                    <div className="form_elements">
                        <label htmlFor="Name" className='labels'>First Name:</label>
                        <input className="inputs" id="Name" type="text" placeholder="First Name" name="firstname"
                               value={nameState.value} onChange={nameChangeHandler} onBlur={validateNames} required/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="Surname" className='labels'>Last Name:</label>
                        <input className="inputs" id="Surname" type="text" placeholder="Last name" name="lastname"
                               value={surNameState.value} onChange={surnameChangeHandler} onBlur={validateSurname}/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="email" className='labels'>Email:</label>
                        <input className="inputs" id="email" type="email" placeholder="Email" name="email"
                               value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmail}/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="phonenumber" className='labels'>Phone Number:</label>
                        <input className="inputs" id="phonenumber" type="tel" placeholder="Phone Number" name="phonenumber"
                               value={phoneState.value} onChange={phoneChangeHandler} onBlur={validatePhone}/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="address" className='labels'>Address: </label>
                        <input className="inputs-address" id="address" type="text" placeholder="address" name="address"
                               value={addressState.value} onChange={addressChangeHandler} onBlur={validateAddress}/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="password" className='labels'>Password: </label>
                        <input className="inputs" id="password" type="password" placeholder="password" name="password"
                               value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePassword}/>
                    </div>

                    <div className="buttons">
                        <button type="submit" className="button-submit">Register</button>
                        <button type="reset" onClick={resetForm} className='button-reset'>Reset</button>

                    </div>

                    </fieldset>
                </form>


        </div>


    )

}