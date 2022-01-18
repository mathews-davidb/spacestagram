import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./Components.css";

import LikeImage from "./LikeImage";
import ShareImage from "./ShareImage";

const ImagesDisplay = (props) => {
  const breakpoints = {
    default: 2,
    1200: 1,
  };

  const imageData = props.imageData;

  const handleBrokenImageLink = (e) =>
    (e.target.src =
      "https://i.ibb.co/H2yfpkC/ba-Ys9-Au-Hxx9-QXe-YBi-Mv-SLU.png");

  return (
    <Container>
      <Grid
        container
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Masonry
          breakpointCols={breakpoints}
          className="image-grid"
          columnClassName="image-grid-column"
        >
          {imageData.map((image) => (
            <>
              {image.url ? (
                <div key={image.date} className="image-card">
                  <CardMedia
                    component="img"
                    className="image"
                    image={image.url}
                    onError={handleBrokenImageLink}
                  />
                  <div className="image-info">
                    <div className="card-header">
                      <Typography
                        align="left"
                        fontFamily="Bebas Neue"
                        fontSize="2em"
                        lineHeight="1em"
                      >
                        {image.title}
                      </Typography>
                      <div style={{ textAlign: "right" }}>
                        <LikeImage />
                        <ShareImage image={image} />
                      </div>
                    </div>

                    <Typography
                      align="left"
                      paddingTop="1em"
                      variant="subtitle2"
                      fontFamily="Mukta"
                      fontSize="1em"
                    >
                      Date: {image.date}
                    </Typography>

                    <Typography
                      align="left"
                      paddingTop="1em"
                      variant="subtitle2"
                      fontSize="1.1em"
                      fontFamily="Mukta"
                      lineHeight="1.2em"
                    >
                      {image.explanation}
                    </Typography>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        </Masonry>
      </Grid>
    </Container>
  );
};

export default ImagesDisplay;
