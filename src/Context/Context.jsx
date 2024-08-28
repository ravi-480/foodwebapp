import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [favourite,setFavourite] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  };
  console.log(recipeList);

  function handleAddToFavorites(getCurrentItem){
    let cpyFavouriteList = [...favourite]
    const index = cpyFavouriteList.findIndex(item=>item.id===getCurrentItem.id)

    if(index ===-1){
      cpyFavouriteList.push(getCurrentItem)
    }
    else{
      cpyFavouriteList.splice(index)
    }
    setFavourite(cpyFavouriteList)
  }

  console.log(favourite);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetail,
        setRecipeDetail,
        handleAddToFavorites,
        favourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
