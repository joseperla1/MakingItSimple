import React from 'react'
import RecipeCard from './RecipeCards';

function RecipeCardList({recipecards}) {
    return (
        <div className="card-grid">
            {recipecards.map(recipecard => {
                return <RecipeCard recipecard={recipecard} key={recipecard.id} />
            })}
        </div>
    )
}

export default RecipeCardList