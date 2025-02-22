import { useState } from "react";

const AccordionItem = ({recipe}) => {
    const [showRecipe, setshowRecipe] = useState(false);

    const handleClick = () => {
        setshowRecipe(!showRecipe);
    }
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md mb-2">
            <button
                onClick={handleClick}
                className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 px-5 py-3 text-left text-lg font-semibold transition-all"
            >
                <span>{recipe.name} ({recipe.cuisine})</span>
                <span className={`transform transition-transform ${showRecipe ? "rotate-180" : ""}`}>▼</span>
            </button>

            {showRecipe && (
                <div className="p-5 bg-gray-50 transition-all">
                    <div className="flex flex-col justify-center items-center">
                    <img src={recipe.image || "https://via.placeholder.com/150"}
                        alt={recipe.name || "Recipe Image"}  className="w-6/12 h-auto object-cover rounded-md" />
                     <p className="text-sm"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p className="text-sm"><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p className="text-sm"><strong>Preparation Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                    <p className="text-sm"><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                    <p className="text-sm"><strong>Servings:</strong> {recipe.servings}</p>
                    <p className="text-sm"><strong>Calories per serving:</strong> {recipe.caloriesPerServing} kcal</p>
                    </div>
                    <h3 className="font-semibold mt-3">Instructions:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>

                    <h3 className="font-semibold mt-3">Ingredients:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AccordionItem;