import React from 'react'
import { render } from 'react-dom'
import Wrapper from './utils/wrapper'
import './index.css'

/**
 * @description central rendering point of our app, will be used to track issues project wide.
 * @todo make color always stay the same after they are generated.
 */
render(
  <Wrapper />,
  document.getElementById('root')
)
