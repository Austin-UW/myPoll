import React from 'react'
import { connect } from 'react-redux'
import { Header, withSnack } from '../exports'
import './myStyles.css'
import { Link } from 'react-router-dom'

const NoMatchComponent = () => (
  <div className="root">
    <Header currentComponent="404" />
    <div id="clouds">
      <div className="cloud x1" />
      <div className="cloud x1_5" />
      <div className="cloud x2" />
      <div className="cloud x3" />
      <div className="cloud x4" />
      <div className="cloud x5" />
    </div >
    <hr />
    <div className="c">
      <div className="_404">404</div>
      <div className="_1">THE PAGE</div>
      <div className="_2">WAS NOT FOUND</div>
      <Link className="btn" to="/">BACK TO MARS</Link>
    </div>
  </div>
)

export const NoMatch = connect(null)(withSnack('404 :(', NoMatchComponent, 'error', ''))
