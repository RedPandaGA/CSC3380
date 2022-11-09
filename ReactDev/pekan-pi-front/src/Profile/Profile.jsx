import {CssBaseline} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';

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
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return(
        <ThemeProvider theme={maintheme}>        
            <CssBaseline />
             <div>
                    <Grid container justifyContent="center">
                        <Grid item md={7} direction = "column" >
                           

                            <div sx={{mt: 5}} >
      <Accordion sx={{mt: 3}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{color: 'text.secondary', width: '55%', flexShrink: 0 }}>
            Change Username
          </Typography>
          <Typography align="right" sx={{color: 'text.secondary' }}>mimi2035</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box //CHANGE USERNAME FIELDS
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField size = "small" id="outlined-basic" label="Username" variant="outlined" />
              </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: 'text.secondary', width: '55%', flexShrink: 0 }}>Change Email</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            mngu174@lsu.edu
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box // CHANGE EMAIL TEXT FIELDS
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField size = "small" id="outlined-basic" label="New Email" variant="outlined" />
      </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ color: 'text.secondary', width: '55%', flexShrink: 0 }}>Change Password</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            *********
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box // CHANGE PASSWORD FIELDS
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField size = "small" id="outlined-password-input " label="New Password" type="password" />
              <TextField size = "small" id="outlined-password-input " label="Confirm New Password" type="password" />
                  </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    
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