import {CssBaseline} from '@mui/material';
import Accordian from './Accordian';
import AppBar from './AppBar';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import SubmitButton from './SubmitButton';

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
        fontSize: 40,
        fontWeightRegular: 700,
    }
})

const Profile = () => { //the profile page
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar/>
            <div>
                <Grid container justifyContent="center">
                {/* put inside the grid down there item sm={12} md={6} */}
                    <Grid item md={6} direction = "column" justifyContent="center" alignItems="center">
                        <Accordian sx={{mt: 4}}/>
                        <SubmitButton/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default Profile;