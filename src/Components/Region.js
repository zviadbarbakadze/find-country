import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Region() {
 
    const[region,setRegion]=useState([])
    const[select,setSelect]=useState('all')
    const[search,setSearch]=useState('')
    
    
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/${select}`)
        .then(res=>{
            setRegion(res.data)
            console.log(res.data)
            console.log()
        })
    },[select])
  return (
    <>
    
   <div className="main-container">
    
    <div className="input-region">
    <input className='input' type="text"
            placeholder='search for a country...'
             onChange={e=>setSearch(e.target.value)}/>
           
         <select name="region "required onChange={(e)=>{
           const selected=e.target.value;
           setSelect(selected)
         }}>
           
          
      <option value="all">All Regions</option>
      
      <option value='region/africa'>Africa</option>
      <option value='region/america'>America</option>
      <option value="region/asia">Asia</option>
      <option value="region/europe">Europe</option>
      <option value="region/oceania">Ocenia</option>
      
      
    </select>
   
    
    </div>
    
    
    <div className="countries-cont">
   {region.filter((val)=>{
        if(search ===''){
           return val
         }else if(val.name.official.toLowerCase().includes(search.toLowerCase())){
           return val 
            
         }
       
          
       }).map((item,index)=>{
    return <div className="card-region" key={index}>
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
      
      </>
      
  )
}
