import PropTypes from 'prop-types'

import new_collection from '../assets/new_collections'
import './newCollections.css'
import { Item } from '../Item/Item'

export const NewCollections = () => {

    return (
        <div className='new-collections'>
            <h1> NEW COLLECTIONS </h1>

            <div className='collections'>
                {new_collection.map((item, id) => {
                    return <Item key={id} id={id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>

        </div>
    )
}

NewCollections.propTypes = {

}