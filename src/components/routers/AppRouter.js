import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Navbar from "../iu/Navbar"
import LoginScreen from '../login/LoginScreen'
import MarvelScreen from '../marvel/MarvelScreen'


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={MarvelScreen} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter