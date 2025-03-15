import React, {useState} from 'react'
import './style.css'
function MovieCard (props) {
    const {imgSrc, movieName, votes, rating} = props;
    return (
        <div className='mn-cont'>
            <div className='cd-header'>
                <img src={imgSrc}/>
            </div>
            <div className='cd-body'>{movieName}</div>
            <div className='cd-footer'>
                <div className='cont'>
                    <span>Votes: {votes}</span>
                    <span>Rating: {rating}</span>
                </div>
                <div>
                    <img src='/images/heart.png'/>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;