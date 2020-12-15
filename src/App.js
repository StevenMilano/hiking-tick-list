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

function App() {

  const [address, setAddress] = React.useState("");
  const [maxResults, setMaxResults] = React.useState(0);
  const [minLength, setMinLength] = React.useState(0);
  const [minStars, setMinStars] = React.useState(0);
  const [maxDistance, setMaxDistance] = React.useState(0);
  const [map, setMap] = React.useState(null);
  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);
  const [url, setUrl] = React.useState("");
  const [data, setData] = React.useState({});
  const [center, setCenter] = React.useState({lat: -34.397, lng: 150.644 })
  const [status, setStatus] = React.useState('idle');
  const [position, setPosition] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [marker, setMarker] = React.useState(null);
  const [value, setValue] = React.useState(2);

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
      <div>
        <Route exact path="/hiking-tick-list" 
          render={(props) => (
            <LandingPage 
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
            minStars={minStars}
            setMinStars={setMinStars}
            maxDistance={maxDistance}
            setMaxDistance={setMaxDistance}
            lat={lat}
            setLat={setLat}
            lng={lng}
            setLng={setLng}
            data={data}
            setData={setData}
            url={url}
            setUrl={setUrl} 
            center={center}
            setCenter={setCenter} 
            status={status}
            setStatus={setStatus}
            position={position}
            setPosition={setPosition}
            response={response}
            setResponse={setResponse}
            error={error}
            setError={setError}
            marker={marker}
            setMarker={setMarker}
            value={value}
            setValue={setValue}/>
          )} />
        <Route path="/hiking-tick-list/find-a-hike" render={(props) => (
            <FindAHike
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
            minStars={minStars}
            setMinStars={setMinStars}
            maxDistance={maxDistance}
            setMaxDistance={setMaxDistance}
            lat={lat}
            setLat={setLat}
            lng={lng}
            setLng={setLng}
            data={data}
            setData={setData}
            url={url}
            setUrl={setUrl} 
            center={center}
            setCenter={setCenter} 
            status={status}
            setStatus={setStatus}
            position={position}
            setPosition={setPosition}
            response={response}
            setResponse={setResponse}
            error={error}
            setError={setError}
            marker={marker}
            setMarker={setMarker}
            value={value}
            setValue={setValue} />
          )} />
        <Route path="/hiking-tick-list/tick-list" component={TickList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
