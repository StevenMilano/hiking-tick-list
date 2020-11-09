import React from 'react'
import Rating from '@material-ui/lab/Rating';

export default function HikeCard() {

    const [value, setValue] = React.useState(2);

    let handleClick = () => {
        console.log("test");
    }

    return (
        <>
            <div className="hike-card" onClick={handleClick}>
                <img className="hike-card-img" src="" alt="" />
                <div className="hike-card-text">
                    <h3>SoapStone-Santee-Ridge Loop</h3>
                    <p>Location maryland elkridge</p>
                    <p>8.2mi</p>
                    <p>accent and decent</p>
                    <p>condition status details, and date</p>
                    <p>Summary classic long mountain route.</p>
                    <div className="rating">
                        <Rating name="read-only" value={value} readOnly />
                    </div>
                </div>
            </div>
            <div className="hike-card" onClick={handleClick}>
            <img className="hike-card-img" src="" alt="" />
            <div className="hike-card-text">
                <h3>SoapStone-Santee-Ridge Loop</h3>
                <p>Location maryland elkridge</p>
                <p>8.2mi</p>
                <p>accent and decent</p>
                <p>condition status details, and date</p>
                <p>Summary classic long mountain route.</p>
                <div className="rating">
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </div>
        </div>
        <div className="hike-card" onClick={handleClick}>
            <img className="hike-card-img" src="" alt="" />
            <div className="hike-card-text">
                <h3>SoapStone-Santee-Ridge Loop</h3>
                <p>Location maryland elkridge</p>
                <p>8.2mi</p>
                <p>accent and decent</p>
                <p>condition status details, and date</p>
                <p>Summary classic long mountain route.</p>
                <div className="rating">
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </div>
        </div>
        </>
    )
}
