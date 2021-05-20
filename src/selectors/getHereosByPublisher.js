// import React from 'react'
import { heroes } from '../data/heores'

const getHereosByPublisher = (publisher) => {
    
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error.apply(`Publisher ${publisher} no es correcto`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}

export default getHereosByPublisher
