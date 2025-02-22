import { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import axios from "axios";

const Accordion = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
            .then((response) => {
                const data = response?.data?.recipes;
                setRecipes(data);
            })
            .catch((error) => {
                console.error("Error in fetching data:", error);
            });
    }, []);

    console.log(recipes);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
            <div className="w-full max-w-2xl">
                <h1 className="font-extrabold text-center m-6 font-mono text-6xl">Recipes</h1>
                {recipes.length > 0 ? recipes.map((recipe) => <AccordionItem  key = {recipe.id} recipe = {recipe} /> ):( <p className="text-center text-gray-500">Loading recipes...</p>)}
            </div>
        </div>
    )
}

export default Accordion;