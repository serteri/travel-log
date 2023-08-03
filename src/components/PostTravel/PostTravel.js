import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './PostTravel.css'



export function PostTravel (){

let {id} = useParams();
const[location,setLocation] = useState('')
    const[date,setDate] = useState('')
const[cost,setCost] = useState('')
const[post,setPost] = useState('')
    const[locationIsValid,setLocationIsValid] = useState(true)
    const[costIsValid,setCostIsValid] = useState(true)
useEffect(() => {
    const checking= setTimeout(()=>{
        locationValidation();

    },1000)

},[location, date, cost, post])

const locationHandler =(e) =>{
    setLocation(e.target.value)
}
    const locationValidation =(e) =>{
        setLocationIsValid(!/\d/.test(location))
    }

    const dateHandler =(e) =>{
        setDate(e.target.value)
    }
    const costHandler =(e) =>{
        setCost(e.target.value)
    }

    const postHandler =(e) =>{
        setPost(e.target.value)
    }

    const submitPost =(e) =>{
        e.preventDefault();
    }

return(
<>
    <section className='posting'>

        <form className="login-form" onSubmit={submitPost} >
            <h1 className='title'>Create  Post</h1>
            <div className="form_elements">
                <i className="fa-solid fa-location-dot icons"></i>
                <input className='inputs'  type='text' placeholder='Add Location' name='location' onChange={locationHandler} value={location} />
            </div>
            <p className={locationIsValid ? "valid" : "invalid"}>Please enter a valid location</p>
            <div className="form_elements">
                <i className="fa-solid fa-calendar-days icons"></i>
                <input className="inputs"  type='date' placeholder='Add date of visit' name='date' onChange={dateHandler}  value={date}/>
            </div>
            <div className="form_elements">
                <i className="fa-solid fa-money-check-dollar icons"></i>
                <input className="inputs"  type='number' placeholder='cost of visit' name='cost' onChange={costHandler}  value={cost}/>
            </div>
            <div>
                <textarea  placeholder='Post something' name='post' rows="4" cols="50" onChange={postHandler} value={post} />
            </div>
            <button className='button-submit' >Post It</button>
        </form>

    </section>


</>
)

}