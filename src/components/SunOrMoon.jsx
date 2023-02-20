

export default function SunOrMoon(sunrise, sunset, timenow) {

    const sunriseHM = sunrise.slice(-5);
    const sunriseHour = sunriseHM.slice(0, 2);
    const sunriseMinuts = sunrise.slice(-2);

    const sunsetHM = sunset.slice(-5);
    const sunsetHour = sunsetHM.slice(0, 2);
    const sunsetMinuts = sunset.slice(-2);

    const timenowHM = timenow.slice(-5);
    const timenowHour = timenowHM.slice(0, 2);
    const timenowMinuts = timenow.slice(-2);

    const startDate = new Date();
    startDate.setHours(sunriseHour, sunriseMinuts, 0, 0);

    const endDate = new Date();
    endDate.setHours(sunsetHour, sunsetMinuts, 0, 0);

    const checkDate = new Date();
    checkDate.setHours(timenowHour, timenowMinuts, 0, 0);

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const checkTime = checkDate.getTime();

    if (checkTime >= startTime && checkTime <= endTime) {
        return <div className="forecast__cloudy__sun"></div>;
    } else {
        return (
        <div className="forecast__cloudy__moon">
            <i className="bi bi-moon-fill"></i>
        </div>
        );
    }
}
