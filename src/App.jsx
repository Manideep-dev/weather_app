import React, { useEffect, useState } from 'react';
import Header from './Header';
import Body from './body';

function App() {
  const [place, setPlace] = useState('Hyderabad');
  const [placedata, setPlacedata] = useState({})
  // place = Hyderabad deafult we have given
  // placedata = null default we have given

  // placedata is updated due to api function where setPlacedata setter function is called in api call in App component
  // place is updated when setPlace setter function is called when button is clicked and event is handled in Body component

  // Flow of our Application
  // useffect is called first where getweatherapi is called with default place i.e Hyderabad as declared above
  // Now getweatherapi is called and we'll get the data and update placedata using setterfunction setplacedata
  // Now we'll have our weather data in placedata
  // placedata values are send through props to Body component
  // we are also sending setPlace setter function to Body component to update it dynamically
  // When a city is entered and search button is clicked then place is updated using setter function setPlace
  // Once place is updated again useeffect is called which calls getweatherapi and searched city data will be stored in 
  // placedata once it gets updated using setPlacedata
  // Again props are send to Body component which will give us required ouput


  async function getweatherdata() {
    console.log('enteredapifunction')
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=23b0498804f7d8dd170ddb9000e77289`;
      let res = await fetch(url);
      let data = await res.json();
      // console.log('data==',data);
      setPlacedata(data)
      return data 
    } catch(err) {
      console.log('error', err);
    }
  }
  // console.log('placedata==',placedata)

  useEffect(() => {
    console.log('useeffeffect')
    getweatherdata(place);
  }, [place]);

  return (
    <>
      <Header/>
      {/* <Nav onChange={handlePlaceChange}/> chekc this for handle events*/}
      <Body setPlace={setPlace} cityname={placedata.name} desc={placedata.weather && placedata.weather.length > 0 ? placedata.weather[0].description : ''}
            temp={placedata.main ? placedata.main.temp : ''} humidity = {placedata.main ? placedata.main.humidity : ''}
            windspeed={placedata.wind ? placedata.wind.speed : ''} message={placedata.message ? placedata.message : ''}/>

      {/* // weather is object inside array
      // while below main is just object
      // check how data is transefered to onchange or else try without component
      // props are very important to send api data to components */}
    </>
  );
}

export default App;

// Initial Data Fetching:
// The useEffect hook is called first when the component mounts.
// It triggers the getweatherdata function with the default place, i.e., Hyderabad.
// getweatherdata fetches weather data from the API and updates the placedata state with the fetched data.

// Rendering with Initial Data:
// The placedata values are sent through props to the Body component, along with the setPlace setter function.
// The Body component renders with the initial weather data for Hyderabad.

// Dynamic Updates:
// When a city is entered and the search button is clicked, the setPlace setter function is called to update the place state dynamically.
// This triggers the useEffect hook again, as its dependency (place) has changed.

// Data Fetching for Searched City:
// The getweatherdata function is called again with the updated place (the searched city).
// It fetches weather data for the searched city and updates the placedata state with the new data.

// Rendering with Updated Data:
// Once again, the placedata values are sent through props to the Body component.
// The Body component re-renders with the updated weather data for the searched city.

// This flow ensures that your application fetches and displays the weather data for the default place initially and then updates it dynamically based on user input. It's a concise and accurate description of your application's behavior.
