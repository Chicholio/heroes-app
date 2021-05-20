import React from 'react'

const SearchScreen = () => {



    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen