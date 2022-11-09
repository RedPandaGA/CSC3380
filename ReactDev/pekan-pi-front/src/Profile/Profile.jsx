import {CssBaseline} from '@mui/material';
import Accordian from './Accordian';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';

const theme = createTheme({  // makes the theme for the whole profile
    palette: {
        background:{
            paper: '#e3eca4  ', //component background green lime color
            default: '#e3eca4' //page's background color green lime color
        }
    },
    typography: {
        fontFamily: 'Playfair Display',
        fontSize: 20, 
        fontWeightRegular: 700, //bold
    }
})

const Profile = () => { //the profile page
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
             <div>
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
            </div>
        </ThemeProvider>
    );
}

export default Profile;