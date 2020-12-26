import React from 'react'
import IngredientList from './IngredientList'
import style from '../style/recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    const formatCalories = data => {
        return data.toFixed(2)
    }

    return <div className={style.recipe}>
        <h3 className={style.recipeName}>{title}</h3>
        <img className={style.recipeImg} src={image} alt='recipe-img'/>
        <p>Calories: {formatCalories(calories)}</p>
        <IngredientList ingredients={ingredients}/>
    </div>
}

export default Recipe