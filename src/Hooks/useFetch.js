import  { useEffect, useState } from 'react'
import axios from 'axios'
let countryName='';

const useFetch = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
     axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
     .then(res=>{
       countryName=res.data[5].name.official
       console.log(countryName)
       setCountries(res.data)
     })
    },[])
    return{
        countryName,
        countries
    }
}
 
export default useFetch;