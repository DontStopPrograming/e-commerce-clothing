import PropTypes from 'prop-types'

import './breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {

  const product = props

  return (

    <div className='breadcrum'>
      <img src={arrow_icon} alt='' />
      <img src={arrow_icon} alt='' />
      {product.category}

      <img src={arrow_icon} alt="" />
      {product.name}

    </div>
  )
}

Breadcrum.propTypes = {
  category: PropTypes.string.required,
  name: PropTypes.string.required
}