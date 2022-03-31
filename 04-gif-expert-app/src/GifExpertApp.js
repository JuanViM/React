import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({defaultCategories = [] }) => {

  //  const categories = ['Dragon ball','One Piece','One puch'];

  const [categories, setCategories] = useState(defaultCategories);  

  //de este modo añadimos un nuevo elemento al array por el final
//   const handleAdd = () =>{
//       setCategories([...categories,"HunterxHunter"]);
      
//   }

    return (
        <>
        <p>GifExpertApp</p>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />
     

        <ol>
            {
                categories.map(category => (
                     <GifGrid 
                     key={category}
                     category={ category } />
                ))
            }
        </ol>
        </>

    );

}