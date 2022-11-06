import {CssBaseline} from '@mui/material';
import Accordian from './Accordian';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';

import MenuImage from "../Images/Home-images/menu.png";
import RecipeImage from "../Images/Home-images/recipes.png";
import WhiskImage from "../Images/Home-images/whisk2.png";
import Logo from "../Images/Home-images/logo2.png";


const theme = createTheme({  // makes the theme for the whole profile
    palette: {
        background:{
            paper: '#e3eca4  ', //component background green lime color
            default: '#e3eca4' //background color
        }
    },
    typography: {
        fontFamily: 'Playfair Display',
        fontSize: 20,
        fontWeightRegular: 500,
    }
})

const boldtheme = createTheme({  // makes the theme for the whole profile
    palette: {
        background:{
            paper: '#e3eca4  ', //component background green lime color
        }
    },
    typography: {
        fontFamily: 'Playfair Display',
        fontSize: 20,
        fontWeightRegular: 700,
    }
})

{/* <Link to="/Login"> Login</Link>
<Link to="/RecipiesPage"> Recipes</Link>
<Link to="/Profile/Profile"> Profile</Link>
<Link to="/Pantry"> Pantry</Link> */}

const Profile = () => { //the profile page
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <div className="navbar">
              <div className="logo">
                <a href="profilePage.html">
                  <img src={Logo} width="150px" />
                </a>
              </div>
              <nav>
                <ul id="MenuItems">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/Pantry">Pantry</a>
                  </li>
                  <li>
                    <a href="/Profile/Profile">Account</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                </ul>
              </nav>
              <a href="search.html">
                {" "}
                <img src={RecipeImage} width="50px" height="50px" />{" "}
              </a>
              <a href="whisk.html">
                {" "}
                <img src={WhiskImage} width="50px" height="50px" />{" "}
              </a>
              <img
                src={MenuImage}
                className="menu-icon"
                //onClick={menuToggle()}
                alt="Menu Image"
              />
            </div>

             <div>
                <ThemeProvider theme ={boldtheme}>
                    <Grid container justifyContent="center">
                        <Grid item md={7} direction = "column" >
                            <Accordian sx={{mt: 5}}/>
                            <Stack justifyContent="center" spacing={2} direction="row">
                                <a justifyContent="center" className="btn">
                                Submit &#8594;{" "}
                                </a>
                            </Stack>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
}

export default Profile;