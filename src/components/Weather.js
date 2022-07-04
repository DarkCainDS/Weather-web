import React, {  useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { BiArrowToRight } from "react-icons/bi";
import { IconContext } from "react-icons";

export const Weather = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [fieldValue, setFieldValue] = useState('')
  


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=80de03045dfaa31a472d5a5bbc6f30a2`
  
  //`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=719cb301e70a470116bb3b0398a09af2`
  /*fetch('https://api.openweathermap.org/data/2.5/weather?q=santiago&appid=719cb301e70a470116bb3b0398a09af2')
  .then(response => response.json())
  .then(items => {
    console.log(items);
  })
  className='description'
  .catch(error => {
    return "Ha fallado la peticion ajax"
  });*/

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)

      })
      setLocation('')
    }
  }


  const date = new Date()
  const hour = date.toString().slice(16, 18)
  console.log(date);

  const handlerBlur = (e) => {

    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)

    })

    setFieldValue(e.target.value);
    console.log(fieldValue);

  }

  
  return (

    <div className={(hour > 16 && hour <= 9) ? 'container' : 'container2'}>
      <h1 >Weather</h1>
      <div className={(hour > 16 && hour <= 9) ? 'upper2' : 'upper'}>
        <div className='search'>
          <input value={location} onBlur={handlerBlur} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter location' type='text'></input>
        </div>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='temperature'>
          {data.main ? <h1>{(data.main.temp - 273.15).toFixed()}°C</h1> : null}
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
        {}
      </div>
      <div className='loading'>
                <span style={{animationDelay:'0.3s'}}>F</span>
                <span style={{animationDelay:'0.5s'}}>o</span>
                <span style={{animationDelay:'0.7s'}}>l</span>
                <span style={{animationDelay:'1s'}}>l</span>
                <span style={{animationDelay:'1.3s'}}>o</span>
                <span style={{animationDelay:'1.5s'}}>w</span>
                <span style={{animationDelay:'1.7s'}}>i</span>
                <span style={{animationDelay:'2s'}}>n</span>
                <span style={{animationDelay:'2.3s'}}>g</span>  &nbsp;
                <span style={{animationDelay:'2.5s'}}>d</span>
                <span style={{animationDelay:'2.7s'}}>a</span>
                <span style={{animationDelay:'3s'}}>y</span>
                <span style={{animationDelay:'3.3s'}}>s</span>&nbsp;
                
                <IconContext.Provider value={{color: "#50C9F2", size: '4em' }}><NavLink to='/following-days'><button className="following-days"> <BiArrowToRight /> </button></NavLink></IconContext.Provider>
            
            </div>
      <div className='bottom'>
        <div className='feels'>
          {data.main ? <p>{(data.main.feels_like - 273.15).toFixed()}°C</p> : null}
          <p>Feels like</p>
        </div>
        <div className='humidity'>
          {data.main ? <p>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className='winds'>
          {data.main ? <p>{data.wind.speed}Mph</p> : null}
          <p>Wind</p>
        </div>
      </div>

    </div>
  )
}
