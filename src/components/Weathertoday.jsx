import SunOrMoon from './SunOrMoon';

export default function Weathertoday(weatherCode, sunrise, sunset, time){

    if(weatherCode === undefined){
        return;
    }

    let sunOrMoon = SunOrMoon(sunrise, sunset, time);

    switch (true) {
        case (weatherCode === 0):
            return(
                <div className='clear'>
                    <div className="forecast">
                        {sunOrMoon}
                    </div>
                </div>
            )
        break;

        case (weatherCode >= 1 && weatherCode <= 3):
            return(
                <div className='cloudy'>
                    <div className="forecast">
                        <div className="forecast__cloudy">
                            {sunOrMoon}
                            <div className="forecast__cloudy__cloud forecast__cloudy__cloud--small">
                            </div>
                            <div className="forecast__cloudy__cloud forecast__cloudy__cloud--normal">
                            </div>
                        </div>
                    </div>
                </div>
            )
        break;

        case (weatherCode >= 45 && weatherCode <= 48):
            return(
                <div className='fog'>
                    <div className="forecast">
                        <div className="forecast__snow">
                            <div className="forecast__fog__cloud"></div>
                            <div className="inner"></div>
                        </div>
                    </div>
                </div>
            )
        break;

        case (weatherCode >= 51 && weatherCode <= 57):
            return(
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
            )
        break;

        case (weatherCode >= 61 && weatherCode <= 67):
            return(
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
            )
        break;

        case (weatherCode >= 80 && weatherCode <= 82):
            return(
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
            )
        break;

        case (weatherCode >= 71 && weatherCode <= 77):
            return(
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
            )
        break;

        case (weatherCode >= 85 && weatherCode <= 86):
            return(
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
            )
        break;
        
        case (weatherCode >= 95 && weatherCode <= 99):
            return(
                <div className='storm'>
                    <div className="forecast">
                        <div className='bowie'></div>
                        <div className="forecast__cloudy">
                            <div className="forecast__cloudy__cloud forecast__cloudy__cloud--normal">
                            </div>
                        </div>
                    </div>
                </div>
            )
        break;

        default:  
            break;
    }

}