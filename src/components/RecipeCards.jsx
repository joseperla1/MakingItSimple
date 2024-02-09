import React,{useState,useEffect,useRef} from 'react';

function RecipeCard({recipecard}) {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial');
    const frontEl = useRef();
    const backEl = useRef();

    function setMaxHeight(){
        const frontHeight = frontEl.current.getBoundingClientRect().height;
        const backHeight = backEl.current.getBoundingClientRect().height;
        setHeight(flip ? Math.max(frontHeight, backHeight, 100): frontHeight);
    }
    useEffect(()=>{
        setMaxHeight();
    }, [recipecard.img, recipecard.title, recipecard.description, recipecard.ingredients,recipecard.instructions, flip]);


    useEffect(()=>{
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [flip])

    const handleFlip = () => {
        setFlip(!flip);
    };

    const getGridRowSpan=() => {
        return Math.ceil(height/100);
    }

    return (
        <div className={`card ${flip ? 'card-flip' : '' }`} 
        style={{ height: height, gridRowEnd: `span ${getGridRowSpan()}` }}
        onClick={handleFlip}>
            
            <div className="front" ref={frontEl}>
            
                <div className="card-image">
                    <img  src={recipecard.img} alt={`Image for ${recipecard.title}`}/>
                </div>

                <div className="card-info" >
                    <h2 >{recipecard.title}</h2>
                    <p >{recipecard.description}</p>
                </div>  

            </div>

            <div className="back" ref={backEl} style={{display: flip ? 'block' : 'none'}}>
                <div className="card-title">
                    <h2 >{recipecard.title}</h2>
                </div>
                
                <div className="back-text">
                    <h3 className='back-title'>Ingredients</h3>
                    <ul>
                        {recipecard.ingredients.map((ingredient,index) =>{
                        return <li key={index}>{ingredient}</li>
                        })}
                    </ul>
                    <br/>
                    <h3 className='back-title'>Instructions</h3>
                    <ol>
                        {recipecard.instructions.map((instruction,index) =>{
                        return <li key={index}>{instruction}</li>})}
                    </ol>
                </div>
                
                
            </div>
        </div>    
    );
}
export default RecipeCard



