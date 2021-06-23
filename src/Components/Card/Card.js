import { Cloud } from '@material-ui/icons';
import React from 'react';
import "./Card.css";

const Card = ({location}, {weather}) => {
    return (
        <div className="card-container">
            <div>
                <Cloud />
            </div>
            <div className="other-location">
                {location}
            </div>
            <div className="other-weather">
                {weather}
            </div>
            <div className="other-date">
                
            </div>
        </div>
    )
}

export default Card
