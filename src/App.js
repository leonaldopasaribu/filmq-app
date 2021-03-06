import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'

import './App.css'

function App () {
  return (
    <Router>
      <div className='app-content'>
        <header className='header-search'>
          <h1 className='title'>Film Q</h1>
        </header>

        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:imdbID' component={Details} />
      </div>
    </Router>
  )
}

export default App