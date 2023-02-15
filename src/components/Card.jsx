import '../styles/style.scss';
import React, { useState, useEffect } from "react";
import CoordinateInput from 'react-coordinate-input';

export default function Card(){
    const [weather, setWeather] = useState({});
    const [currentHour, setCurrentHour] = useState(0);
    const [city, setCity] = useState();
    const [Latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);


    useEffect(() => {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=stockholm`;

        async function fetchDataCity() {
            const response = await fetch(url);
            const data = await response.json();
            setCity(data);
            setLatitude(data.results[0].latitude);
            setLongitude(data.results[0].longitude);
        }

        fetchDataCity();
    }, []);

    let cityLatitude = 0;
    let citylongitude = 0;
    if(city){
        cityLatitude = Latitude;
        citylongitude = longitude;

        //check MET Norway API
        //check weather code in the end of this https://open-meteo.com/en/docs page
        const url = `https://api.open-meteo.com/v1/gfs?latitude=${cityLatitude}&longitude=${citylongitude}&hourly=temperature_2m`
        
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setWeather(data);
        });
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
        const date = new Date();
        setCurrentHour(date.getHours());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let temperature = 0;

    if(weather.hourly){
        temperature = weather.hourly.temperature_2m[currentHour];
    }

    return(
        <section className='cardSec'>
            <div className='allContent'>
                <div className='card'>
                    <div className='top'>
                        <label className='labelSearchBar' htmlFor="searchBar">
                            <input className='searchBar' id='searchBar' type="text" spellCheck="true" />
                            <span className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></span>
                        </label>
                    </div>
                    
                    <div className='middle'>
                        <div className='temperature'>
                            <span>{temperature}</span>
                        </div>

                        <div className='weatherAnimation'>

                            <div className='rain'>
                                <div className="forecast">
                                    <div className="forecast__rainy">
                                        <div className="forecast__rainy__rain forecast__rainy__rain--one">
                                        </div>
                                        <div className="forecast__rainy__rain forecast__rainy__rain--two">
                                        </div>
                                        <div className="forecast__rainy__rain forecast__rainy__rain--three">
                                        </div>
                                        <div className="forecast__rainy__rain forecast__rainy__rain--four">
                                        </div>
                                        <div className="forecast__rainy__rain forecast__rainy__rain--five">
                                        </div>
                                        <div className="forecast__rainy__rain forecast__rainy__rain--six">
                                        </div>
                                        <div className="forecast__rainy__rain forecast__rainy__rain--seven">
                                        </div>
                                        <div className="forecast__rainy__cloud forecast__rainy__cloud--grey"> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='snow'>
                                <div className="forecast">
                                    <div className="forecast__snow">
                                        <div className="forecast__snow__snow forecast__snow__snow--first"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__snow forecast__snow__snow--second"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__snow forecast__snow__snow--third"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__snow forecast__snow__snow--fourth"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__snow forecast__snow__snow--five"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__snow forecast__snow__snow--six"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__snow forecast__snow__snow--seven"><i className="fa-regular fa-snowflake"></i></div>
                                        <div className="forecast__snow__cloud forecast__snow__cloud--grey"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='suny'>
                                <div className="forecast">
                                    <div className="forecast__sunny"></div>
                                </div>
                            </div>

                            <div className='cloudy'>
                                <div className="forecast">
                                    <div className="forecast__cloudy">
                                        <div className="forecast__cloudy__sun"></div>
                                        <div className="forecast__cloudy__cloud forecast__cloudy__cloud--small">
                                        </div>
                                        <div className="forecast__cloudy__cloud forecast__cloudy__cloud--normal">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bottom'>
                        
                    </div>
                </div>
            </div>
        </section>
    );

}