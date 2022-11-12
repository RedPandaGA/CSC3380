import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Markup } from "interweave";
import { Link } from 'react-router-dom';

export default function RecipeCard(recipeData) {
  const name = recipeData.recipeData.title;
  const imgURL = recipeData.recipeData.image;
  const summary = "<p>" + recipeData.recipeData.summary + "</p>";
  const link = recipeData.recipeData.sourceUrl;
  
  console.log(recipeData);
  console.log(name);
  console.log(imgURL);

  return (
    <Card sx={{ maxWidth: '100%', backgroundColor: "grey.300", mb: 3}}>
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
        {/* share button sends to the home for now */}
        <Button size="small" variant="outlined"><Link to="/">Share</Link></Button>
        <Button size="small" variant="outlined"><Link to={link}>Learn More</Link></Button>
      </CardActions>
    </Card>
  );
}
