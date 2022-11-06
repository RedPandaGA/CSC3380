import {CssBaseline} from '@mui/material';
import Accordian from './Accordian';
import AppBar from './AppBar';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import SubmitButton from './SubmitButton';

// import Home from "ReactDev\pekan-pi-front\src\Pages\Home.js";
// import Pantry from "ReactDev\pekan-pi-front\src\Pages\Pantry.js";
// import Profile from "ReactDev\pekan-pi-front\src\Pages\Profile.js";
// import RecipiesPage from "ReactDev\pekan-pi-front\src\Pages\RecipiesPage.js";
// import Login from "ReactDev\pekan-pi-front\src\Pages\Login.jsx";
// import Forgot from "ReactDev\pekan-pi-front\src\Pages\Forgot\Forgot.jsx";
// import { Routes, Route, Outlet, Link, Form } from "react-router-dom";

const theme = createTheme({  // makes the theme for the whole profile
    palette: {
        primary: {
            main:'#ff523b'
        },
        background:{
            paper: '#e3eca4  ',
            default: '#e3eca4'
        }
    },
    typography: {
        fontFamily: 'Playfair Display',
        fontSize: 20,
        fontWeightRegular: 700,
    }
})

const Profile = () => { //the profile page
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppBar/> */}
            {/* <div>
                <Routes className="NavBar">
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/RecipiesPage" element={<RecipiesPage />} />
                    <Route path="/Profile/Profile" element={<Profile />} />
                    <Route path="/Pantry" element={<Pantry />} />
                    <Route path="/forgot" element={<Forgot />} />
                </Routes>
            </div> */}
            <div>
                <Grid container justifyContent="center">
                {/* put inside the grid down there item sm={12} md={6} */}
                    <Grid item md={6} direction = "column" justifyContent="center" alignItems="center">
                        <Accordian sx={{mt: 5}}/>
                        <SubmitButton/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default Profile;