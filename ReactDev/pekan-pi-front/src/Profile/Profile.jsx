import {CssBaseline} from '@mui/material';
import Accordian from './Accordian';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const maintheme = createTheme({  // makes the theme for the whole profile
    palette: {
        primary: {
            main: '#ff523b' //red textfield outline
        },
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

// const darktheme = createTheme({  // dark theme for profile
//     palette: {
//         primary: {
//             main: '#FFFFFF', //white
//             contrastText: '#FFFFFF'
//         },
//         background:{
//             paper: '#555', //component background gray
//             default: '#555' //page's background gray
//         },
//         text:{
//             primary: '#FFFFFF',
//             secondary: '#FFFFFF',
//         }
//     },
//     typography: {
//         fontFamily: 'Playfair Display',
//         fontSize: 20, 
//         fontWeightRegular: 700, //bold
//     }
// })

// function getTheme() {
//     const switched = document.getElementById('darkmodeswitch');
//     if (switched === true){
//         return darktheme;
//     }
//     else {
//         return maintheme;
//     }
// }

const Profile = () => { //the profile page
    return(
        <ThemeProvider theme={maintheme}>        
            <CssBaseline />
             <div>
                    <Grid container justifyContent="center">
                        <Grid item md={7} direction = "column" >
                            <Accordian sx={{mt: 5}}/>
                            <Stack justifyContent="center" spacing={2} direction="row" sx={{mt: 5}}>
                            <TextField size = "small" id="outlined-password-input " label="Old Password" type="password" />
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