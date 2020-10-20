import React from 'react'
import PropTypes from 'prop-types'

import './EmptyBox.css'

function EmptyBox ({ customClasses = [] }) {
  return (
    <section className={`empty-card ${customClasses.join(' ')}`}>
      
      <p className='intro'>Search your favorite movies</p>
      <p className='offer'>Type in the form above</p>
    </section>
  )
}

EmptyBox.propTypes = {
  customClasses: PropTypes.arrayOf(PropTypes.string)
}

export default EmptyBox
