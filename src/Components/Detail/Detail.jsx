import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import "./Detail.css";

const Detail = () => {
  const { recipeDetail, setRecipeDetail, handleAddToFavorites, favourite } =
    useContext(GlobalContext);
  const { id } = useParams();

  const getRecipeDetails = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    const data = await response.json();
    if (data?.data) {
      console.log(data.data);
      setRecipeDetail(data.data.recipe);
    }

    console.log(data);
  };

  useEffect(() => {
    getRecipeDetails();
  }, [id]);

  return (
    <div className="detail-container">
      <div className="recipe-image">
        <img src={recipeDetail?.image_url} alt={recipeDetail?.title} />
      </div>
      <div className="recipe-details">
        <h2>{recipeDetail?.title}</h2>
        <h3>Ingredients</h3>
        <ul>
          {recipeDetail?.ingredients?.map((ingredient, index) => (
            <li key={index}>
              <span>
                {ingredient.quantity}
                {ingredient.unit} -{" "}
              </span>
              {ingredient.description}
            </li>
          ))}
        </ul>
        <button
          className="favorite-button"
          onClick={() => handleAddToFavorites(recipeDetail)}
        >
          { favourite && favourite.length>0 && favourite.findIndex(
            (item) => item.id === recipeDetail?.id
          ) !== -1
            ? "Remove from fav"
            : "Add To Fav"}
        </button>
      </div>
    </div>
  );
};

export default Detail;
