import './CSS/shop.css'

import { Hero } from '../Hero/Hero'
import { Popular } from '../Popular/Popular'
import { Offers } from '../Offers/Offers';
import { NewCollections } from '../NewCollections/NewCollections';
import { NewsLetters } from '../NewsLetters/NewsLetters';

export const Shop = () => {
    return (
        <div className='shopMain'>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetters />
        </div>
    )

};


