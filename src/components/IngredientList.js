import React from 'react'
import ingredientImage from '../img/no-img.png'
import style from '../style/ingredientList.module.css'

const IngredientList = ({ingredients}) => {
    return <>
        <ol className='ingredient-list'> What we need:
            {ingredients.map(({image, text, weight}, index) => {
                return <li key={index} className='ingredient-item'>
                    <img className={style.ingredientImg} src={image !== null ? image : ingredientImage}
                         alt="ingredient-img"/>
                    <div className='ingredient-description'>
                        <span>{text}</span>
                        <span>{weight}</span>
                    </div>
                </li>
            })}
        </ol>
    </>
}

export default IngredientList