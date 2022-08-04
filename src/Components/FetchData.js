import { useEffect, useState } from 'react'
import axios from 'axios'
export default function FetchData() {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(res=>{
       
          setCountries(res.data)
          console.log(res.data[255].region)
         
          
        })
       },[])
       return {
        countries
      }
}
