import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { get } from '../../services/movies'

import Chip from '../../components/Chip/Chip'
import CardListLite from '../../components/CardListLite/CardListLite'

import './Details.css'
import IconArrowWhite from '../../assets/icons/icon-arrow-white.svg'
import LogoImdbIcon from '../../assets/logos/logo-imdb.svg'
import LogoRottenTomatoes from '../../assets/logos/logo-rotten-tomatoes.svg'

function Detail ({ match }) {
  const [ isLoading, setisLoading ] = useState(true)
  const [ imdbID ] = useState(match.params.imdbID)
  const [ movieData, setMovieData ] = useState({})

  useEffect(() => {
    get(imdbID, { plot: 'full' }).then((response) => {
      const {
        Runtime = '',
        Year = '',
        Ratings = [],
        Title = '',
        Poster = '',
        imdbRating = '',
        Actors = '',
        Genre = '',
        Director = '',
        Plot
      } = response

      const data = {
        imdbRating: imdbRating === 'N/A' ? '0%' : `${Number(imdbRating) * 10}%`,
        runtime: Runtime,
        year: Year,
        title: Title,
        poster: Poster,
        rating: (Ratings.find(({ Source }) => Source === 'Internet Movie Database') || { Value: '0/0' }).Value,
        actors: Actors.split(' '),
        genres: Genre.split(' '),
        directors: Director.split(' '),
        plot: Plot
      }

      setMovieData(data)
      setisLoading(false)
    })
  }, [imdbID])

  return (
    <section className='movie-about'>
      {
        !isLoading && <>
          <article className='movie-info'>
            <Link to='/' className='back-home'>
              <img className='icon' src={IconArrowWhite} alt='Icon back to home' />
            </Link>

            <div className='movie-time'>
              <span className='duration -separator_disc'>{movieData.runtime}</span>
              <span className='year -separator_disc'>{movieData.year}</span>
              <span className='right -separator_disc'>R</span>
            </div>

            <h1 className='title'>{movieData.title}</h1>

            <div className='movie-extra'>
              <Chip customClasses={['extra']} icon={LogoImdbIcon} bgIcon='#ffa200' label={movieData.imdbRating} />
              <Chip customClasses={['extra']} icon={LogoRottenTomatoes} bgIcon='#ff0026' label={movieData.rating} />
            </div>

            <div className='movie-description'>
              <p>
                {movieData.plot}
              </p>
            </div>

            <div className='movie-members'>
              <CardListLite title='Cast' list={movieData.actors} />
              <CardListLite title='Genre' list={movieData.genres} />
              <CardListLite title='Director' list={movieData.directors} />
            </div>

          </article>
          <article className='movie-poster'>
            <img className='poster' src={movieData.poster} alt={`Poster from movie ${movieData.title}`} />
          </article>
      </>
      }
    </section>
  )
}

export default Detail
