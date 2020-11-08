import React from 'react'
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


export default function LandingPage({ onLoad, onUnmount, containerStyle, center }) {

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
          <form action="/action_page.php">
            <label for="address">address</label>
            <input type="text" id="address" name="address" placeholder="Appalachian trail"/>
             <label for="max-results" >Max results</label>
            <input max="500" type="max-results" id="max-results" name="max-results" value="10"/>
            <label for="min-length" >Minimum Trail length</label>
            <input type="min-length" id="min-length" name="min-length" value="0"/>
            <label for="min-rating" >Minimum rating</label>
            <input type="min-rating" id="min-rating" name="min-rating" value="0" max="4"/>
            <button>Find Hikes</button>
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
                <button type='submit'>Sign Up</button>
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
