import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Favourite = () => {
  const {  loading,favourite } = useContext(GlobalContext);

  return (
    <div>
    
      {loading ? <h3 className="loading">Loading, please wait...</h3> : null}

      {favourite && favourite.length > 0 ? (
        <div className="recipe-list">
          {favourite.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
              <div className="recipe-info">
                <span>{recipe.publisher}</span>
                <h3>{recipe.title}</h3>
                <Link to={`/recipe-item/${recipe.id}`}>Favourite Details</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>Please Add first in fovourite List.</h3>
        </div>
      )}
    </div>
  );
};

export default Favourite;
