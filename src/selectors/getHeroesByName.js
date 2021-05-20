// import React from 'react'
import { heroes } from "../data/heores"


const getHeroesByName = (name = '') => {
    
    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase()
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name))
}

export default getHeroesByName
