import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

function Card ({ imdbID, title, year, poster, to}) {
  const cardStyle = {
    background: `url(${poster}) no-repeat center`,
    'backgroundColor': '#be3232'
  }

  return (
    <div style={cardStyle} className='card-post'>
      <div className='card-content'>
        <Link
          key={imdbID}
          to={to}
          className='movie-link'
        >
          <span className='title'>{title}</span><br />
          <span className='year'>{year}</span>
        </Link>
      </div>
    </div>
  )
}

export default Card
