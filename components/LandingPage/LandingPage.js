import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


export default function LandingPage({ onLoad, onUnmount, containerStyle, center, address, setAddress, maxResults, setMaxResults, minLength, setMinLength, minRating, setMinRating, searchArea, setSearchArea }) {

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log(center)

  }

  return (
        <div>
            <main role="main">
      <header role="banner">
        <h1>Hiking Tick list</h1>
        <h2>Find hikes near you</h2>
      </header>
      <section>
        <header>
            <h3>Find Hikes near you and make a tick list for each hike.</h3>
        </header>
        <form id="hike-finder">
                <div class="form">
                    <label for="address">Enter a location</label>
                    <input onChange={e => setAddress(e.target.value)} value={address} type="text" id="address" name="address" placeholder="Appalachian trail" required />
                </div>
                <div class="form">
                    <label for="resultsLimit">Result limit</label>
                    <input onChange={e => setMaxResults(e.target.value)} value={maxResults} type="number" id="resultsLimit" name="resultsLimit" max="500" />
                </div>
                <div class="form">
                    <label for="search-area">Search area</label>
                    <select onChange={e => setSearchArea(e.target.value)} value={searchArea} id="search-area" name="search-area">
                        <option value="30">30 Miles</option>
                        <option value="50">50 Miles</option>
                        <option value="100">100 Miles</option>
                        <option value="150">150 Miles</option>
                        <option value="200">200 Miles</option>
                    </select>
                </div>
                <div class="form">
                    <label for="hike-length">Hike length</label>
                    <select onChange={e => setMinLength(e.target.value)} value={minLength} id="hike-length" name="hike-length">
                        <option value="5">5 Miles</option>
                        <option value="10">10 Miles</option>
                        <option value="15">15 Miles</option>
                        <option value="20">20 Miles</option>
                        <option value="0">No limit</option>
                    </select>
                </div>
                <div class="form">
                    <label for="rating">Hike length</label>
                    <select onChange={e => setMinRating(e.target.value)} value={minRating} id="rating" name="rating">
                        <option value="1">1 star</option>
                        <option value="2">2 star</option>
                        <option value="3">3 star</option>
                        <option value="4">4 star</option>
                        <option value="0">No limit</option>
                    </select>
                </div>
                <input type="button" value="search" id="submit" />
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
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
      <Element id='signup-form' name='signup-form'>
            <header>
                <h3>Start Now</h3>
            </header>
            <form class='signup-form'>
                <div>
                <label for="first-name">First name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                </div>
                <div>
                <label for="last-name">Last name</label>
                <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                </div>
                <div>
                <label for="username">Email</label>
                <input type="text" name='username' id='username' />
                </div>
                <div>
                <label for="password">Password</label>
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
