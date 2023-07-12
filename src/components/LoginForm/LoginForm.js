import React, {useState , useEffect} from 'react'

const LoginForm = ()=>{
    const [enteredEmail,setEnteredEmail]= useState('')

    const emailChangeHandler= (e) => {
        setEnteredEmail(e.target.value)
    }

    return(
        <div>
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={enteredEmail} onChange={emailChangeHandler}/>

            </form>
        </div>

        )

}

export default LoginForm;