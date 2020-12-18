import React, {useState, useEffect} from 'react'
import './App.css';
import Recipe from "./components/Recipe";

const App = () => {
    const API_ID = '48f158c7'
    const API_KEY = 'fad331c93d981a7835793a463b765aa6'
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getRecipes()
        console.log('run request')
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(recipes)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return (
        <div className="App">
            <div className="search">
                <form className='search__form' onSubmit={getSearch}>
                    <input className='search__bar' type="text" value={search} onChange={updateSearch}/>
                    <button className='search__btn'
                            type='submit'
                    >Search
                    </button>
                </form>
                {recipes.map(({recipe}, index) => {
                    return <Recipe key={index}
                                   title={recipe.label}
                                   calories={recipe.calories}
                                   img={recipe.image}
                                   ingredients={recipe.ingredients}
                    />
                })}
            </div>
        </div>
    );
}

export default App;
