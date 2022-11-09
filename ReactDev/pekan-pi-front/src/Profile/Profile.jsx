import {CssBaseline} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import axios from 'axios'
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

async function updateCall(oldPassword, newPassword1, newPassword2, newEmail, newUsername){
    const LUID = JSON.parse(localStorage.getItem('udata')).userId
    const token = JSON.parse(localStorage.getItem('udata')).token
    if(newUsername != ""){
        await axios({
            method: 'POST',
            url: 'http://localhost:3002/updateUsername',
            headers: { Authorization : `token ${token}` },
            data: { UID: LUID, newUsername: newUsername, oldPassword: oldPassword }
        })
        .then(res => {
            if(!res.data.success){
                console.log(res)
                alert("Failed to update username!")
            } else {
                console.log(res)
                alert("Username updated successfully!")
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error updating username!')
        })
        //end for tonight-need to add updating local-storage
    }

}

const Profile = (props) => { //the profile page
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const [oldPassword, setOldPassword] = React.useState("")
    const [newPassword1, setNewPassword1] = React.useState("")
    const [newPassword2, setNewPassword2] = React.useState("")
    const [newEmail, setNewEmail] = React.useState("")
    const [newUsername, setNewUsername] = React.useState("")

    return(
        <ThemeProvider theme={maintheme} className="profile-page">        
            <CssBaseline />
             <div>
                    <Grid container justifyContent="center">
                        <Grid item md={7} direction = "column" >
                           

                            <div sx={{mt: 5}} >

                             {/**Profile table dark mode */}
      <Accordion sx={{mt: 3,backgroundColor:props.darkmode?"rgb(113, 111, 111)":"#e3eca4"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
            <TextField size = "small" id="username-input" label="Username" variant="outlined" value={newUsername} onChange={nu => setNewUsername(nu.target.value)}/>
              </Box>
        </AccordionDetails>
      </Accordion>
        {/**Profile table dark mode */}
      <Accordion sx={{backgroundColor:props.darkmode?"rgb(113, 111, 111)":"#e3eca4"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
            <TextField size = "small" id="new-email-input" label="New Email" variant="outlined" value={newEmail} onChange={ne => setNewEmail(ne.target.value)} />
      </Box>
        </AccordionDetails>
      </Accordion>
         {/**Profile table dark mode */}
      <Accordion sx={{backgroundColor:props.darkmode?"rgb(113, 111, 111)":"#e3eca4"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
              <TextField size = "small" id="new-password-input " label="New Password" type="password" value={newPassword1} onChange={np1 => setNewPassword1(np1.target.value)}/>
              <TextField size = "small" id="confirm-password-input " label="Confirm New Password" type="password" value={newPassword2} onChange={np2 => setNewPassword2(np2.target.value)}/>
                  </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    
                            <Stack justifyContent="center" spacing={2} direction="row" sx={{mt: 5}}>
                            <TextField size = "small" id="old-password-input " label="Old Password" type="password" value={oldPassword} onChange={op => setOldPassword(op.target.value)}/>
                                <a justifyContent="center" className="btn" onClick={() => updateCall(oldPassword, newPassword1, newPassword2, newEmail, newUsername)}>
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