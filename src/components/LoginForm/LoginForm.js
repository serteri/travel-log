import React, {useState , useEffect} from 'react'

const LoginForm = (props)=>{
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
    return(
        <div>
            <form onSubmit={submitForm}>
                <label>Email address:</label>
                <input type="text" name="name" value={enteredEmail} onChange={emailChangeHandler}/>
                <label>Password:</label>
                <input type="password" name="password" value={enteredPassword} onChange={passwordChangeHAndler}/>
            </form>
        </div>

        )

}

export default LoginForm;