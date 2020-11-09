import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FindAHike from './components/FindAHike/FindAHike';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import TickList from './components/TickList/TickList';
import Geocode from 'react-geocode';

// https://www.hikingproject.com/data/get-trails?
// 200793847-c31065fb4a7ef9c4bec2522c771d7f3c

Geocode.setApiKey("AIzaSyD1OurySFNmim0G5iuXQ-8To7tec6RO0qk");
Geocode.setLanguage("en");

const containerStyle = {
  width: '400px',
  height: '400px'
};
 
let center = {
  lat: 40.0000,
  lng: -78.0000
};

function App() {

  const [address, setAddress] = React.useState("");
  const [maxResults, setMaxResults] = React.useState(0);
  const [minLength, setMinLength] = React.useState(0);
  const [minRating, setMinRating] = React.useState(0);
  const [searchArea, setSearchArea] = React.useState(0)
  const [map, setMap] = React.useState(null)

  Geocode.fromAddress(address).then(
    response => {
      let { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.error(error);
    }
  );

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <body>
        <Route exact path="/" 
          render={(props) => (
            <LandingPage {...props} 
            onUnmount={onUnmount} 
            onLoad={onLoad} 
            center={center}
            containerStyle={containerStyle}
            address={address}
            setAddress={setAddress}
            maxResults={maxResults}
            setMaxResults={setMaxResults}
            minLength={minLength}
            setMinLength={setMinLength}
            minRating={minRating}
            setMinRating={setMinRating}
            searchArea={searchArea}
            setSearchArea={setSearchArea} />
          )} />
        <Route path="/find-a-hike" render={(props) => (
            <FindAHike {...props} 
            onUnmount={onUnmount} 
            onLoad={onLoad} 
            center={center}
            containerStyle={containerStyle}
            address={address}
            setAddress={setAddress}
            maxResults={maxResults}
            setMaxResults={setMaxResults}
            minLength={minLength}
            setMinLength={setMinLength}
            minRating={minRating}
            setMinRating={setMinRating}
            searchArea={searchArea}
            setSearchArea={setSearchArea} />
          )} />
        <Route path="/tick-list" component={TickList} />
      </body>
      <Footer />
    </div>
  );
}

export default App;
