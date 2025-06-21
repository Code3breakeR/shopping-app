import React from 'react'
import './Fashion.css'

function Fashion(props) {
    return (props.fashion) ? (
        <div className='fashion'>
            <span>Watch</span>
            <span>SunGlass</span>
            <span>Hat</span>
            <span>Shoes</span>
            <span>Shirts</span>
            <span>Pants</span>
            <span>Geans</span>
        </div>
    ) : '';
}

export default Fashion
