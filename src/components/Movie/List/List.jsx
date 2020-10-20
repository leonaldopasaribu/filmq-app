import React from 'react'

import Grid from '../../Grid/Grid'
import Card from '../Card/Card'
import ButtonLoadMore from '../../Button/Button'
import Loading from '../../Loading/Loading'

import './List.css'

function List ({ isLoading, hasError, moviesList, loadMore, total }) {
  return (
    <section className='movies-list'>
      <Grid>
        {
          hasError
            ? <div className='empty'><p>Sorry! Movie not found</p></div>
            : moviesList.map(({ Title, Year, Poster, imdbID, Liked }) => (
              <Card
                key={imdbID}
                imdbID={imdbID}
                title={Title}
                year={Year}
                poster={Poster}
                isLiked={Liked}
                to={`/movie/${imdbID}`}
              />
            ))
        }
      </Grid>

      { isLoading && <Loading customClasses={['loading']}/> }

      {
        total > moviesList.length && <ButtonLoadMore label='Load more' click={loadMore} />
      }

    </section>
  )
}

export default List
