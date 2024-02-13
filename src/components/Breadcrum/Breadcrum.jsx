import PropTypes from 'prop-types'

import './breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {

  const { product } = props

  // if (!props.product) {
  //   return null
  // }

  return (

    <div className='breadcrum'>
      <img src={arrow_icon} alt='' />
      <img src={arrow_icon} alt='' />
      {props.category}

      <img src={arrow_icon} alt="" />
      {props.name}

    </div>
  )
}

Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}