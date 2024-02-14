import searchicon from './assets/search.png';
import weatherImage from './assets/cloud.png'
import cloudy from './assets/cloud.png'
import clear from './assets/clear.png'
import drizzle from './assets/drizzle.png'
import foggy from './assets/foggy.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import humidityicon from './assets/humidity.png'
import windicon from './assets/wind.png'

function Body({cityname, desc, temp, humidity, windspeed, setPlace, message}) {
    // console.log('setplace==',setPlace)
    function handledataonclick(e) {
        console.log('clickeddd event search',e)
        const newPlace = document.querySelector('.searchinput').value;
        console.log('newplace--',newPlace)
        setPlace(newPlace);
    }
    let weatherImage_1;
    // console.log('des==',desc)

    switch (desc) {
    case 'clear sky':
        weatherImage_1 = clear;
        break;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
        weatherImage_1 = cloudy;
        break;
    case 'shower rain':
    case 'drizzle':
        weatherImage_1 = drizzle;
        break
    case 'rain':
        weatherImage_1 = rain;
        break;
    case 'thunderstorm':
        weatherImage_1 = cloudy;
        break;
    case 'snow':
        weatherImage_1 = snow;
        break;
    case 'mist':
    case 'smoke':
    case 'haze':
    case 'dust':
    case 'fog':
    case 'sand':
    case 'dust':
    case 'ash':
    case 'squall':
    case 'tornado':
        weatherImage_1 = foggy;
        break;
    default:
        weatherImage_1 = cloudy;
        break;
    }
    return(
        <>
            <div className="card-container">
                <div className="search-bar">
                    <input type="text" className="searchinput" placeholder="Search.." />
                    <div className="search-icon"  onClick={handledataonclick}>
                        <img className='searchicon' src={searchicon} alt='searchiconimage'/>
                    </div>
                </div>
                <div className='weather-image'>
                    <img src={weatherImage_1} alt=''/>
                </div>
                <div className='weather-desc'>{desc}</div>
                <div className='weather-temp'>{temp && Math.floor(temp - 273.15)}°C</div>
                <div className='weather-location'>{message.length>0 ? 'Enter Valid city' : cityname}</div>
                <div className='weather-data'>
                    <div className='element'>
                        <img src={humidityicon} alt='' className='icon'/>
                        <div className='data'>
                            <div className='humidity-percent'>{humidity} %</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={windicon} alt='' className='icon'/>
                        <div className='data'>
                            <div className='wind-speed'>{Math.floor(windspeed)} Km/hr</div>
                            <div className="text">Windspeed</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body