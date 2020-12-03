import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';

export default function LandingPage({ 
    onLoad, 
    onUnmount, 
    containerStyle, 
    address = "", 
    setAddress, 
    maxResults = 0, 
    setMaxResults, 
    minLength = 0, 
    setMinLength, 
    minStars = 0, 
    setMinStars, 
    maxDistance = 30, 
    setMaxDistance, 
    lat = 0, 
    setLat, 
    lng = 0, 
    setLng, 
    data = {}, 
    setData, 
    url, 
    setUrl,
    center = {lat: -34.397, lng: 150.644},
    setCenter,
    status = "idle",
    setStatus,
    position = [],
    setPosition,
    response = [],
    setResponse,
    error = [],
    setError }) {

let hikingProjectURL = "https://www.hikingproject.com/data/get-trails?"
let hikingProjectKey = "200793847-c31065fb4a7ef9c4bec2522c771d7f3c"

  const handleSubmit = (e) => {
    e.preventDefault(); 
    resolveData(data);
    Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          setLat(lat);
          setLng(lng);
          latLng(hikingProjectKey, lat, lng, maxResults, minLength, minStars, maxDistance);
          setCenter({lat: lat, lng: lng});

          function formatQueryParams(params) {
            var queryItems = Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                return queryItems.join('&');
          };
          
          async function latLng(hikingProjectKey, lat, lng, maxResults, minLength, minStars, maxDistance) {
            let a = await getLatLng(hikingProjectKey, lat, lng, maxResults, minLength, minStars, maxDistance);
            return a;
          };

           function getLatLng(hikingProjectKey, lat, lng, maxResults, minLength, minStars, maxDistance) {
              var params = {
                  key: hikingProjectKey,
                  lat: lat,
                  lon: lng,
                  maxDistance: maxDistance,
                  maxResults: maxResults,
                  hikeLength: minLength,
                  hikeRating: minStars
              };
              var queryString = formatQueryParams(params);
              setUrl(hikingProjectURL + queryString);
              
              fetch(url)
                .then(res => res.json())
                .then(
                  (data) => {
                    setStatus('fetched');
                    setData(data.trails);
                    console.log(data);
                  },
                  (error) => {
                    setStatus('fetched');
                    setError(error);
                  })
              console.log(url);
        }
        },
        error => {
          console.error(error);
        }
      );

}

      // async function fetchData() {
      //   const response = await fetch(url)
      //     .then(res => res.json());
      //     // console.log(url);
      //     console.log(response);
      //   // const data = await response.json();
      //   // console.log(JSON.stringify(data));
      //   // return response.data;
      // }

      // fetchData().then(data => {
      //   setData(data);
        
      // });

      
      
      
  useEffect(() => {
   if (!url) return;
    setStatus('fetching');
            // console.log(data);
}, []);

const resolveData = (data) => {
  // data && console.log(data)
  // data && data.trails.map((data) => <Marker key={data.trails.id} position={data.trails.latitude, data.trails.longitude} />
  }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

  return (
        <div>
            <main role="main">
      <header role="banner">
        <h1>Hiking Tick list</h1>
        <h2>Find hikes near you</h2>
      </header>
      <section>
        <header>
            <h3>Find Hikes near you and make a tick list htmlFor each hike.</h3>
        </header>
        <form id="hike-finder">
                <div className="form">
                    <label htmlFor="address">Enter a location</label>
                    <input onChange={e => setAddress(e.target.value)} value={address} type="text" id="address" name="address" placeholder="Appalachian trail" required />
                </div>
                <div className ="form">
                    <label htmlFor="resultsLimit">Result limit</label>
                    <select onChange={e => setMaxResults(e.target.value)} value={maxResults} type="number" id="resultsLimit" name="resultsLimit" >
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                    </select>
                </div>
                <div className="form">
                    <label htmlFor="search-area">Search area</label>
                    <select onChange={e => setMaxDistance(e.target.value)} value={maxDistance} id="search-area" name="search-area">
                        <option value="30">30 Miles</option>
                        <option value="50">50 Miles</option>
                        <option value="100">100 Miles</option>
                        <option value="150">150 Miles</option>
                        <option value="200">200 Miles</option>
                    </select>
                </div>
                <div className="form">
                    <label htmlFor="hike-length">Hike length</label>
                    <select onChange={e => setMinLength(e.target.value)} value={minLength} id="hike-length" name="hike-length">
                        <option value="5">5 Miles</option>
                        <option value="10">10 Miles</option>
                        <option value="15">15 Miles</option>
                        <option value="20">20 Miles</option>
                        <option value="0">No limit</option>
                    </select>
                </div>
                <div className="form">
                    <label htmlFor="rating">Hike rating</label>
                    <select onChange={e => setMinStars(e.target.value)} value={minStars} id="rating" name="rating">
                        <option value="1">1 star</option>
                        <option value="2">2 star</option>
                        <option value="3">3 star</option>
                        <option value="4">4 star</option>
                        <option value="0">No limit</option>
                    </select>
                </div>
                <input type="button" value="search" id="submit" onClick={handleSubmit}/>
            </form>
          <div className="map">
            <LoadScript
              googleMapsApiKey="AIzaSyD1OurySFNmim0G5iuXQ-8To7tec6RO0qk">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}>
                {/* <Marker
                  position={position} /> */}
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
      <Element id='signup-form' name='signup-form'>
            <header>
                <h3>Start Now</h3>
            </header>
            <form className='signup-form'>
                <div>
                <label htmlFor="first-name">First name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                </div>
                <div>
                <label htmlFor="last-name">Last name</label>
                <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                </div>
                <div>
                <label htmlFor="username">Email</label>
                <input type="text" name='username' id='username' />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
                </div>
                <Link to="/find-a-hike"><button type='submit'>Sign Up</button></Link>
                <div className="mt-2">
                    <span>Already have an account? </span>
                    <Link to='/login'><span className="loginText">Login here</span></Link>
                </div>
            </form>
        </Element>
    </main>
        </div>
    )
}