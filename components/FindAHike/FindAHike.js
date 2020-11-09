import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function FindAHike({ onLoad, onUnmount, containerStyle, center, address, setAddress, maxResults, setMaxResults, minLength, setMinLength, minRating, setMinRating, searchArea, setSearchArea }) {
    return (
        <div>
            <header role="banner">
                <h2>Find hikes near you</h2>
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
            <p id="js-error-message" class="error-message"></p>
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
            <div class="hidden" id="search-results">
                <ul id="results-list">
                </ul>
            </div>
        </div>
    )
}
