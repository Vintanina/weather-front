import React from 'react';
import {Cloud, FlashOn, LocationOnOutlined} from '@material-ui/icons'
import Card from './Card/Card';
import './Weather.css';

const Weather = () => {
    const style = {
        fontSize: "150pt",
        margin: "auto"
    }

    return (
        <div className="container">
            <nav className="search-box">
                <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                />
                <button className="button">
                    <LocationOnOutlined />
                </button>
            </nav>
            <div className="location-box">
                <div className="location">
                    <div className="location-details">
                        <h3>18°</h3>
                        <h4>Lightning</h4>
                        <h1>PAKISTAN</h1>
                    </div>
                    <div className="weather-image">
                        <FlashOn style={style}/>
                    </div>
                </div>
                <div>
                    <Card location="New York" weather="Rainy" />
                </div>

            </div>
        </div>
    )
}

export default Weather
