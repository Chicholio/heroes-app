// import React from 'react'
import { heroes } from '../data/heores'

const getHeroeById = (id) => {
    
    return heroes.find(hero => hero.id === id)
}

export default getHeroeById
