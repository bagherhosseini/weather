import '../styles/style.scss';
import React, { useState, useEffect } from "react";
import CoordinateInput from 'react-coordinate-input';

export default function Card(){
    const [weather, setWeather] = useState({});
    const [currentHour, setCurrentHour] = useState(0);
    const [city, setCity] = useState();
    const [Latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [clear, setClear] = useState('none');
    const [cloudy, setCloudy] = useState('none');
    const [raining, setRaining] = useState('none');
    const [snowing, setSnowing] = useState('none');


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

    
    useEffect(() => {
        let cityLatitude = 0;
        let citylongitude = 0;
        if(city){
            cityLatitude = Latitude;
            citylongitude = longitude;

            //check MET Norway API
            //check weather code in the end of this https://open-meteo.com/en/docs page
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${citylongitude}&hourly=temperature_2m,weathercode`;
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

    if(weather.hourly){
        temperature = weather.hourly.temperature_2m[currentHour];
        let weatherCode = weather.hourly.weathercode[currentHour];

        switch (true) {
            case (weatherCode === 0):
                console.log('Clear sky')
                break;

            case (weatherCode >= 1 && weatherCode <= 3):
                // 1, 2, 3	Mainly clear, partly cloudy, and overcast
                console.log('Cloudy')
                break;

            case (weatherCode >= 45 && weatherCode <= 48):
                console.log('Fog')
                break;

            case (weatherCode >= 51 && weatherCode <= 57):
                console.log('Drizzle')
                break;

            case (weatherCode >= 61 && weatherCode <= 67):
                console.log('Raining')
                break;

            case (weatherCode >= 80 && weatherCode <= 82):
                console.log('Raining')
                break;

            case (weatherCode >= 71 && weatherCode <= 77):
                console.log('Snowing')
                break;

            case (weatherCode >= 85 && weatherCode <= 86):
                console.log('Snowing')
                break;
            
            case (weatherCode >= 95 && weatherCode <= 99):
                console.log('Thunderstorm')
                break;

            default:  
                break;
        }
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
                            
                            <div className='suny' style={{ display: clear }}>
                                <div className="forecast">
                                    <div className="forecast__sunny"></div>
                                </div>
                            </div>

                            <div className='cloudy' style={{ display: cloudy }}>
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

                            <div className='rain' style={{ display: raining }}>
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

                            <div className='snow' style={{ display: snowing }}>
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

                            <div className='storm' style={{ display: 'block' }}>
                                <div className="forecast">
                                    <div className='bowie'></div>
                                    <div className="forecast__cloudy">
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