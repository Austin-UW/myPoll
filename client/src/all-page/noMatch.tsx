import React from 'react'
import { connect } from 'react-redux'
import { Header, withSnack } from '../exports'
import './myStyles.css'
import { Link } from 'react-router-dom'

const NoMatchComponent = () => (
  <div className="root">
    <Header currentComponent="404" />
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>4<span>0</span>4</h1>
        </div>
        <p>The page you are looking for might have been removed
          had its name changed or is temporarily unavailable.
        </p>
        <Link to="/">home page</Link>
      </div>
    </div>
  </div>
)

export const NoMatch = connect(null)(withSnack('404 :(', NoMatchComponent, 'error', ' '))
