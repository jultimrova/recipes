import React from 'react'

const Recipe = ({title, calories, img}) => {
    return <div className='recipe'>
        <h3>{title}</h3>
        <p>Calories: {calories}</p>
        <img src={img} alt="recipe"/>
    </div>
}

export default Recipe