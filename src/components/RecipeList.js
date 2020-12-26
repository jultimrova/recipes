import React from 'react'
import Recipe from "./Recipe"
import style from '../style/recipe.module.css'

const RecipeList = ({recipes}) => {
    return <div className={style.recipeList}>
        {recipes.map(({recipe}, index) => {
            return <Recipe key={index}
                           title={recipe.label}
                           calories={recipe.calories}
                           image={recipe.image}
                           ingredients={recipe.ingredients}
            />
        })}
    </div>

}

export default RecipeList