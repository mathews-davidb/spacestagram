import React, { useState } from "react";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@mui/material";

const ShareImage = (props) => {
  const body = `${props.image.title}%0D%0A%0D%0ALink - ${props.image.url}`;

  return (
    <IconButton>
      <a
        href={`mailto:?subject=Check out this image from NASA via Spacestagram&body=${body}`}
      >
        <ShareIcon className="share" />
      </a>
    </IconButton>
  );
};

export default ShareImage;
