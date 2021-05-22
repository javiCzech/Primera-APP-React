import React from 'react'

const GifGridItem = ( {id, title, url}) => {


    return(
        <div className="box animate__animated animate__fadeInLeft">

        <img src={ url } alt={ title } />
        <p> { title } </p>

        </div>
    )
}

export default GifGridItem