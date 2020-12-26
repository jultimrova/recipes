import React, {useState, useEffect} from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import Search from './components/Search'

const App = () => {
    const API_ID = '48f158c7'
    const API_KEY = 'fad331c93d981a7835793a463b765aa6'
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getRecipes()
        console.log('run request')
        console.log(recipes)
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className='wrapper'>
            <h1 className='heading'>Recipes</h1>
            <Search searchResult={search}
                    updateSearch={updateSearch}
                    getSearch={getSearch}/>
            <RecipeList recipes={recipes}/>
        </div>
    );
}

export default App
