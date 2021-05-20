import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import Navbar from '../components/iu/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/dc" component={DcScreen} />
                <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <Redirect to="/marvel" />
            </Switch>
        </>
    )
}

export default DashboardRouter
