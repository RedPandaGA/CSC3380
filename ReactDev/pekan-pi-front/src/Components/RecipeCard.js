import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Markup } from "interweave";

export default function RecipeCard(recipeData) {
  const name = recipeData.recipeData.title;
  const imgURL = recipeData.recipeData.image;
  const summary = "<p>" + recipeData.recipeData.summary + "</p>";
  
  console.log(recipeData);
  console.log(name);
  console.log(imgURL);

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
