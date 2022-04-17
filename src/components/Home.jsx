import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { home } from '../Redux/Home/action';
import { Link } from "react-router-dom"
import "./Home.css"


export const Home = () => { 
    const dispatch = useDispatch() ;
    // const [data , usedata] = useState([]) ;

    useEffect(() => {
        dispatch(home()) ;
     },[]) ;
    
   const {loading , homedata , error} = useSelector((state) => state.home) ;
    console.log(homedata)
    return(
        <div className='main'>
            <h1>Welcome The Masai Map!</h1>
          <button className='button'><Link to="/add-country" className='country1'>Add Country</Link></button><br />
           <button className='button'><Link to="/add-city" className='country1'>Add City</Link></button>  
            <table className='table'>
                <thead>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>

                </thead>
            </table>
        </div>
    )
}