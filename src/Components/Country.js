import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

 

export default function Country() {
  const navigate=useNavigate()
    const{index}=useParams()
    const[countries,setCountries]=useState()
  
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(res=>{
       
          setCountries(res.data)
          console.log(res.data[index])
         
         
          
        })
       },[index])
    

    

   
  return (
    <>
    <button className='back' onClick={()=>navigate('/')}>Back</button>
   {countries && 
   <div className='main-country'>
   
   <div className="flag">
  
   <img src={countries[index].flags.png} alt="" width={350} />
   
   </div>
   <div className="gerb">
    <img src={countries[index].coatOfArms.png} width={200}alt="" />
   </div>
   <div className="country">
    <div className="name">
   <h2>{countries[index].name.official}</h2>
   </div>
   
   
   <h4>Population:{countries[index].population}</h4>
   <h4>Region: {countries[index].region}</h4>
   <h4>Sub Region: {countries[index].subregion}</h4>
   <h4>Capital: {countries[index].capital}</h4>
   
   </div>
  
   
   
    
   </div>
   }
    
    </>
  )
}
