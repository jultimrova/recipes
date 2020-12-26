import React from 'react'
import noImage from '../img/no-img.png'
import style from '../style/ingredientList.module.css'

const IngredientList = ({ingredients}) => {
    return <>
        <section className='ingredientList'> What we need:
            {ingredients.map(({image, text, weight}, index) => {
                return <div key={index} className={style.ingredientItem}>
                    <img className={style.ingredientImg} src={image !== null ? image : noImage}
                         alt='ingredient-img'/>
                    <ul className='ingredientDescription'>
                        <li>{text}</li>
                        <li>Weight: {weight}</li>
                    </ul>
                </div>
            })}
        </section>
    </>
}

export default IngredientList