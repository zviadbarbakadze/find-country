import React from 'react'

import { Link } from 'react-router-dom'
import Region from './Components/Region'
import FetchData from './Components/FetchData'
import { useState } from 'react'



export default function Fetch() {
  
    
    
   const{countries}=FetchData()
  return (
    <div className="main">
   
    
    
    <div className='card-cont'>
     
        
            {countries.map((item,index)=>{
               
                return <div key={index} className='card'>
                  
                    <img src={item.flags.png} alt=""  />
                    <h2>{item.name.official}</h2>
                    <h4>Population: {item.population}</h4>
                    <h4>Region: {item.region}</h4>
                    <h4>Capital: {item.capital}</h4>
                    <h4>Area {item.area}</h4>
                        
                </div>
                
            })}
        
       
    </div>
    
    </div>
  )
}
