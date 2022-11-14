import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Markup } from "interweave";
import '../Pages/recipePage.css';
import { useState } from "react";

export default function RecipeCard(recipeData, props) {
  // const name = recipeData.recipeData.title;
  // const imgURL = recipeData.recipeData.image;
  // const summary = "<p>" + recipeData.recipeData.summary + "</p>";
  // const link = recipeData.recipeData.sourceUrl;

  const [name, setName] = useState(recipeData.recipeData.title);
  const [imgURL, setImgURL] = useState(recipeData.recipeData.image);
  const [summary, setSummary] = useState("<p>" + recipeData.recipeData.summary + "</p>");
  const [link, setLink] = useState(recipeData.recipeData.sourceUrl);
  
  // console.log(recipeData);
  // console.log(name);
  // console.log(imgURL);
  // console.log(link);

  return (
    <Card sx={{ maxWidth: '100%', backgroundColor: "grey.200", mb: 3}}>
      <CardMedia
        component="img"
        height="200"
        image={imgURL}
        alt={name + "image"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {/* this will take the summary string and convert it to HTML markup. See: https://milesj.gitbook.io/interweave */}
          <Markup content={summary} /> 
        </Typography>
      </CardContent>
      <CardActions>
        {/* share button sends to the home for now */}
        <Button size="small" variant="outlined">
          <a href="#" target="_blank">Share</a>
        </Button>
        <Button size="small" variant="outlined">
          <a href={link} target="_blank">Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}
