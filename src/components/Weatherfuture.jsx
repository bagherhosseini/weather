export default function Weatherfuture(weatherCode){
    
    if(weatherCode === undefined){
        return;
    }

    switch (true) {
        case (weatherCode === 0):
            return(
                <div className='clear'>
                    <i className="bi bi-sun-fill"></i>
                </div>
            )
        break;

        case (weatherCode >= 1 && weatherCode <= 3):
            return(
                <div className='cloudy'>
                    <i className="bi bi-cloud-sun-fill"></i>
                </div>
            )
        break;

        case (weatherCode >= 45 && weatherCode <= 48):
            return(
                <div className='fog'>
                    <i className="bi bi-cloud-fog"></i>
                </div>
            )
        break;

        case (weatherCode >= 51 && weatherCode <= 57):
            return(
                <div className='rain'>
                    <i className="bi bi-cloud-drizzle-fill"></i>
                </div>
            )
        break;

        case (weatherCode >= 61 && weatherCode <= 67):
            return(
                <div className='rain'>
                    <i className="bi bi-cloud-drizzle-fill"></i>
                </div>
            )
        break;

        case (weatherCode >= 80 && weatherCode <= 82):
            return(
                <div className='rain'>
                    <i className="bi bi-cloud-drizzle-fill"></i>
                </div>
            )
        break;

        case (weatherCode >= 71 && weatherCode <= 77):
            return(
                <div className='snow'>
                    <i className="bi bi-cloud-snow-fill"></i>
                </div>
            )
        break;

        case (weatherCode >= 85 && weatherCode <= 86):
            return(
                <div className='snow'>
                    <i className="bi bi-cloud-snow-fill"></i>
                </div>
            )
        break;
        
        case (weatherCode >= 95 && weatherCode <= 99):
            return(
                <div className='storm'>
                    <i className="bi bi-cloud-lightning-rain-fill"></i>
                </div>
            )
        break;

        default:  
            break;
    }

}