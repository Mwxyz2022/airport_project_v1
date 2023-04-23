import React from 'react'
import { Link } from 'react-router-dom'

import DirectionIcon from '../../images/direction.svg'
import './directionBtn.scss'

const DirectionBtn = () => {
  return (
    <section className="direction">
      <Link to={{ pathname: '/departures' }} className="btn btn__departures">
        <div className="btn__container">
          <DirectionIcon className={'icon icon__departures'} />
          <span className="title__departures">all departures</span>
        </div>
      </Link>
      <Link to={{ pathname: '/arrivals' }} className="btn btn__arrivals">
        <div className="btn__container">
          <span className="title__arrivals">all arrivals</span>
          <DirectionIcon className={'icon icon__arrivals'} />
        </div>
      </Link>
    </section>
  )
}

export default DirectionBtn
