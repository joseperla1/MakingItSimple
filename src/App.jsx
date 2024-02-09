import React, { useState } from 'react';
import RecipeCardList from './components/RecipeCardList';
import recipes from './scripts/recipes';
import Footer from './components/Footer';


function App() {
  const [recipecards, setRecipecards] = useState(()=>recipes);
  
  return (
    <>
    <h1>Making it Simple</h1>
    <div className='container'><RecipeCardList recipecards={recipecards}/></div>
    <Footer/>
    </>
  );
}

export default App
