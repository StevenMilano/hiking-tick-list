import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FindAHike from './components/FindAHike/FindAHike';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import TickList from './components/TickList/TickList';

const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: 40.0000,
  lng: -78.0000
};

function App() {
  const [map, setMap] = React.useState(null)

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
              containerStyle={containerStyle} />
          )} />
        <Route path="/find-a-hike" render={(props) => (
            <FindAHike {...props} 
              onUnmount={onUnmount} 
              onLoad={onLoad} 
              center={center}
              containerStyle={containerStyle} />
          )} />
        <Route path="/tick-list" component={TickList} />
      </body>
      <Footer />
    </div>
  );
}

export default App;
