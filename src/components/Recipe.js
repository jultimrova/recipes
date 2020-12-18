import React from 'react'
import IngredientList from "./IngredientList";

const Recipe = ({title, calories, img, ingredients}) => {
    return <div className='recipe'>
        <h3>{title}</h3>
        <p>Calories: {calories}</p>
        <img src={img} alt="recipe-img"/>
        <IngredientList ingredients={ingredients}/>
    </div>
}

export default Recipe