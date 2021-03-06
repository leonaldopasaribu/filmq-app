import React from 'react'
import './InputBox.css'
import searchIcon from '../../assets/icons/icon-magnifier-disabled.svg'
import PropTypes from 'prop-types'

function InputBox ({ handlerChange = () => {}, val }) {
  return (
    <section className='search-container'>
      <div className='icon-search'>
        <img src={searchIcon} className='icon' alt='Icon search' />
      </div>

      <input
        onChange={handlerChange}
        className='input'
        type='text'
        placeholder='Search movies'
        value={val}
        autoFocus
        required
      />
    </section>
  )
}

InputBox.propTypes = {
  handlerChange: PropTypes.func,
  val: PropTypes.string.isRequired
}

export default InputBox
