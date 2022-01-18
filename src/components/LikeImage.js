import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@mui/material";

const LikeImage = (props) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <IconButton
      onClick={() => {
        if (favorite) {
          setFavorite(false);
        } else {
          setFavorite(true);
        }
      }}
    >
      {favorite ? (
        <FavoriteIcon className="favorite" />
      ) : (
        <FavoriteBorderIcon className="favorite-border" />
      )}
    </IconButton>
  );
};

export default LikeImage;
