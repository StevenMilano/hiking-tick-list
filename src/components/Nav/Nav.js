import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

export default function Nav() {
    return (
        <nav>
            <Link to="/hiking-tick-list">Home</Link>
            <ScrollLink
                to="signup-form" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='signup-form' 
                activeClass='signup-form-active'>
                Sign up
            </ScrollLink>
            <Link to="/hiking-tick-list/find-a-hike">Find a hike</Link>
            <Link to="/hiking-tick-list/tick-list">Tick List</Link>
        </nav>
    );
}
