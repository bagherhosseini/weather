import '../styles/style.scss';
import React, { useState, useEffect } from "react";
import Weatherdisplay from './Futureweather.jsx';
import Weathertoday from './Weathertoday.jsx';

export default function Card(){
    const [weather, setWeather] = useState({});
    const [currentHour, setCurrentHour] = useState(0);

    const [citydata, setCitydata] = useState();
    const [Latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [city, setCity] = useState();
    const [cityName, setCityName] = useState("");

    const [allContentheight, setAllContentheight] = useState('110px');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setCityName(city);
        setAllContentheight('1085px');

        try {
          const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
          const data = await response.json();
    
          if (data) {
            setCitydata(data);
            setLatitude(data.results[0].latitude);
            setLongitude(data.results[0].longitude);
          } else {
            setCitydata();
          }
        } catch (error) {
          console.error(error);
        }
    };

    function handleChange(event) {
        setCity(event.target.value);
    }

    useEffect(() => {
        let cityLatitude = 0;
        let citylongitude = 0;
        if(citydata){
            cityLatitude = Latitude;
            citylongitude = longitude;
            //https://api.open-meteo.com/v1/dwd-icon?latitude=${cityLatitude}&longitude=${citylongitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&windspeed_unit=ms&timezone=Europe%2FBerlin
            const url = `https://api.open-meteo.com/v1/dwd-icon?latitude=${cityLatitude}&longitude=${citylongitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&windspeed_unit=ms&timezone=Europe%2FBerlin`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
            });
        }
    }, [Latitude, longitude, city]);

    useEffect(() => {
        const interval = setInterval(() => {
        const date = new Date();
        setCurrentHour(date.getHours());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let temperature = 0;
    let humidity = 0;
    let wind = 0;

    let Fweather =  Weatherdisplay(weather.daily);

    let Tweather = null;

    if(weather.hourly){
        temperature = weather.hourly.temperature_2m[currentHour];
        humidity = weather.hourly.relativehumidity_2m[currentHour];
        wind = weather.hourly.windspeed_10m[currentHour];

        let weatherCode = weather.hourly.weathercode[currentHour];
        Tweather =  Weathertoday(weatherCode);
    }


    return(
        <section className='cardSec'>
            <div className='allContent' style={{height: allContentheight}}>
                <div className='top'>
                    <form className='searchCity' onSubmit={handleSubmit}>
                        <label className='labelSearchBar' htmlFor="searchBar">
                            <input className='searchBar' value={city} onChange={handleChange} id='searchBar' type="text" autoComplete="off" placeholder='Search a city' style={{ textTransform: "capitalize" }} required/>
                            <button type="submit" className='searchBtn'><i className="fa-solid fa-magnifying-glass"></i></button>
                        </label>
                    </form>

                    <div className='middle'>
                        <div className='weatherAnimation'>{Tweather}</div>
                    </div>

                    <div className='weatherInfo'>   
                        <span className='cityContent'> <i className="fa-solid fa-location-dot"></i> {cityName} </span>

                        <div className='temperature-wind-drop'>
                            <span className='temperature'> <i className="fa-solid fa-temperature-half"></i> {temperature}</span>
                            <div className='wind-drop'>
                                <span className='wind'> <i className="fa-solid fa-wind"></i> {wind}</span>
                                <span className='droplet'> <i className="fa-solid fa-droplet"></i> {humidity}</span>
                            </div>
                        </div>   
                    </div>

                    <div className='futureWeather'>
                        {Fweather}
                    </div>

                </div>
            </div>
        </section>
    );

}