import clsx from "clsx";
import MealCard from "./MealCard";
import recipes from "../data/recipes.json"

const IngridientsList = () => {
    const recipeId=sessionStorage.getItem("recipeId");
    const ingridients = Object.entries(recipes[0].recipesList[recipeId].ingredients_int);

    const test = ingridients.map(item=>item[1])
    return(
        <ul
          className=""
          
        >
      
                        {test.map(i=>Object.entries(i)[0]).map((item, index) => {
            return(
                <li key={index}>
                    {item[0]} - {item[1][0].ghg}  ghg
                </li>
            )}
             
            )}
        </ul>
    )
  
  }
  
  
  export default IngridientsList;