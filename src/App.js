import React, {useState, useEffect} from 'react'
import './App.css';
import Recipe from "./components/Recipe";

const App = () => {
    const API_ID = '48f158c7'
    const API_KEY = 'fad331c93d981a7835793a463b765aa6'
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(recipes)
    }

    return (
        <div className="App">
            <div className="search">
                <form className='search__form'>
                    <input className='search__bar' type="text"/>
                    <button className='search__btn'
                            type='submit'
                            onClick={() => console.log('submit')}>Search
                    </button>
                </form>
                {recipes.map(({recipe}, index) => {
                    return <Recipe key={index}
                                   title={recipe.label}
                                   calories={recipe.calories}
                                   img={recipe.image}/>
                })}
            </div>
        </div>
    );
}

export default App;
