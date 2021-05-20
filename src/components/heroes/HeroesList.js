import React from 'react'
import getHereosByPublisher from '../../selectors/getHereosByPublisher'
import HeroCard from './HeroCard'

const HeroesList = ({ publisher }) => {

    const heroes = getHereosByPublisher(publisher)

    return (
        <div className="card-column">
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />    
                ))
            }
        </div>
    )
}

export default HeroesList
