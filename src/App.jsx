import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [city,setCity]=useState("delhi")
  const [weatherDate,setWeatherDate]=useState(null)
  const currentDate=new Date()
  const months=[
    "January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
  ]
const month=months[currentDate.getMonth()];
const date=currentDate.getDate();
const year=currentDate.getFullYear()
const format=`${month}/ ${date}/ ${year}`
  const API_Key="50c5f0f53125cb717d15c101672f633a";
  const Fetchapi=async ()=>
  {
    try {
      
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
      const data = await response.json();
      console.log(data);
      setWeatherDate(data)
     


    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  Fetchapi();
},[])


const handlinput=(e)=>{
console.log(e.target.value)
setCity(e.target.value)
}

const handleSubmit=(e)=>{
e.preventDefault()
Fetchapi();
}



  return (
    
     <div>
   {weatherDate &&(
    <>
    <div >
    <h1 className=''>{format}</h1>
    <p>{weatherDate.name}</p>
    <h3>{weatherDate.main.temp }</h3>
    <p>{weatherDate.weather[0].main}</p>
    </div>
    <form onSubmit={handleSubmit}>
     <input type="text" placeholder='Enter the city' onChange={handlinput}/>
     <button type="submit">Get</button>
    </form>
    </>
   )}
     </div>
    
  )
}

export default App
