import './footer.css'


export  function Footer(){
    const date = new Date().getFullYear()
    return (
        <div className='footer'>
            <p className="date1">Copyright</p>
            <p className="date"> {date}</p>
        </div>




    )




}