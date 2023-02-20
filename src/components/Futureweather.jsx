import ShortenedWeekDays from './Getweekday';
import Weatherfuture from './Weatherfuture'

export default function Weatherdisplay(wheatherObj){
    if(wheatherObj){
    const rows = [];
    for (var j = 1; j <= 3; j++) {
        rows.push(

        <div className='futureWeatherdays' key={j}>

            <div className="day">
                <ShortenedWeekDays date={wheatherObj.time[j]} />
            </div>

            <div className='futureWeatherBox'>{Weatherfuture(wheatherObj.weathercode[j])}</div>

            <div className='futureWeatherinfo'>
                <span className="maxTemp">{wheatherObj.temperature_2m_max[j]}</span>
                <span>{wheatherObj.temperature_2m_min[j]}</span> 
            </div>
        </div>
        
        );
    }

    return (
        <div className='futureWeather'>
            {rows}
        </div>
    );
}
}


