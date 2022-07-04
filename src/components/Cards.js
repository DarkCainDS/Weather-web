import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/card.css'
import { NavLink } from 'react-router-dom'
import { BiArrowToLeft } from "react-icons/bi";
import { IconContext } from "react-icons";





export const Cards = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [fieldValue, setFieldValue] = useState('')
    


    const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=80de03045dfaa31a472d5a5bbc6f30a2`

    const handlerBlur = (e) => {

        axios.get(url2).then((response) => {
            setData(response.data)
            console.log(response.data)

        })

        setFieldValue(e.target.value);
        console.log(fieldValue);

    }
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url2).then((response) => {
                setData(response.data)
                console.log(response.data)

            })
            setLocation('')

        }
    }
    const date = new Date()
    const hour = date.toString().slice(16, 18)
    useEffect(() => {

    }, [])
    return (
        <div className={(hour > 16 && hour <= 9) ? 'container' : 'container2'}>
            <h1>Weather</h1>
            <div className='search'>
                <input value={location} onBlur={handlerBlur} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter location' type='text'></input>
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
                <span style={{animationDelay:'2.3s'}}>g</span> &nbsp;
                <span style={{animationDelay:'2.5s'}}>d</span>
                <span style={{animationDelay:'2.7s'}}>a</span>
                <span style={{animationDelay:'3s'}}>y</span>
                <span style={{animationDelay:'3.3s'}}>s</span>
            </div>
            <div className='cards-container'>
                <div className='card'>
                    <div className='city'>
                        <h1>{location}</h1>
                        {data.list ? <p>{data.list[5].weather[0].main}</p> : null}
                        {data.list ? <h3>{data.list[5].dt_txt.slice(0, 10)}</h3> : null}
                    </div>
                    <div className='value'>
                        {data.list ? <img src={`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@4x.png`} alt='' /> : null}
                        {data.list ? <h2>{(data.list[5].main.temp - 273.15).toFixed()}°</h2> : null}
                    </div>
                    <div className='card-footer'>
                        <div className='min-temp'>
                            <p>Humidity</p>
                            {data.list ? <p>{data.list[5].main.humidity}%</p> : null}
                        </div>
                        <div className='max-temp'>
                            <p>Wind</p>
                            {data.list ? <p>{data.list[5].wind.speed}Km/H</p> : null}
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='city'>
                        <h1>{location}</h1>
                        {data.list ? <p>{data.list[10].weather[0].main}</p> : null}
                        {data.list ? <h3>{data.list[10].dt_txt.slice(0, 10)}</h3> : null}
                    </div>
                    <div className='value'>
                        {data.list ? <img src={`https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@4x.png`} alt='' /> : null}
                        {data.list ? <h2>{(data.list[10].main.temp - 273.15).toFixed()}°</h2> : null}
                    </div>
                    <div className='card-footer'>
                        <div className='min-temp'>
                            <p>Humidity</p>
                            {data.list ? <p>{data.list[10].main.humidity}%</p> : null}
                        </div>
                        <div className='max-temp'>
                            <p>Wind</p>
                            {data.list ? <p>{data.list[10].wind.speed}Km/H</p> : null}
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='city'>
                        <h1>{location}</h1>
                        {data.list ? <p>{data.list[15].weather[0].main}</p> : null}
                        {data.list ? <h3>{data.list[15].dt_txt.slice(0, 10)}</h3> : null}
                    </div>
                    <div className='value'>
                        {data.list ? <img src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@4x.png`} alt='' /> : null}
                        {data.list ? <h2>{(data.list[15].main.temp - 273.15).toFixed()}°</h2> : null}
                    </div>
                    <div className='card-footer'>
                        <div className='min-temp'>
                            <p>Humidity</p>
                            {data.list ? <p>{data.list[15].main.humidity}%</p> : null}
                        </div>
                        <div className='max-temp'>
                            <p>Wind</p>
                            {data.list ? <p>{data.list[15].wind.speed}Km/H</p> : null}
                        </div>
                    </div>
                </div>
            </div>
            <IconContext.Provider value={{color: "#50C9F2", size: '4em' }}>
            <NavLink to='/home'><button className="following-days"><BiArrowToLeft/></button></NavLink>
            </IconContext.Provider>
        </div>
    )
}

 