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
import { InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from 'react';

import Box from '@mui/material/Box';

// API endpoint URLs
const usernameURL = process.env.NODE_ENV === 'production' ? '/updateUsername' : 'http://localhost:3002/api/updateUsername'
const emailURL = process.env.NODE_ENV === 'production' ? '/updateEmail' : 'http://localhost:3002/api/updateEmail'
const passURL = process.env.NODE_ENV === 'production' ? '/updatePassword' : 'http://localhost:3002/api/updatePassword'

const maintheme = createTheme({  // makes the theme for the whole profile
    palette: {
        primary: {
            main: '#ff523b' //red textfield outline
        },
        background:{
            paper: '#e3eca4', //component background green lime color
            default: '#e3eca4' //page's background color green lime color
        }
    },
    typography: {
        fontFamily: 'Playfair Display', //default font
        fontSize: 17, 
        fontWeightRegular: 700, //bold
    }
})

async function updateCall(oldPassword, newPassword1, newPassword2, newEmail, newUsername){
    const LUID = JSON.parse(localStorage.getItem('udata')).userId
    const token = JSON.parse(localStorage.getItem('udata')).token
    if(newUsername != ""){
        await axios({
            method: 'POST',
            url: usernameURL,
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
        const localData = JSON.parse(localStorage.getItem('udata'))
        localData.username = newUsername
        localStorage.setItem('udata', JSON.stringify(localData))
    }
    if(newEmail != ""){
        await axios({
            method: 'POST',
            url: emailURL,
            headers: { Authorization : `token ${token}` },
            data: { UID: LUID, newEmail: newEmail, oldPassword: oldPassword }
        })
        .then(res => {
            if(!res.data.success){
                console.log(res)
                alert("Failed to update email!")
            } else {
                console.log(res)
                alert("Email updated successfully!")
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error updating email!')
        })
        const localData = JSON.parse(localStorage.getItem('udata'))
        localData.email = newEmail
        localStorage.setItem('udata', JSON.stringify(localData))
    }
    if(newPassword1 != ""){
        if(newPassword2 == newPassword1){
            await axios({
                method: 'POST',
                url: passURL,
                headers: { Authorization : `token ${token}` },
                data: { UID: LUID, newPassword: newPassword1, oldPassword: oldPassword }
            })
            .then(res => {
                if(!res.data.success){
                    console.log(res)
                    alert("Failed to update password!")
                } else {
                    console.log(res)
                    alert("Password updated successfully!")
                    localStorage.removeItem('udata')
                    alert("Please Login with your new password!")
                    window.location.replace('/Login')
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error updating password!')
            })
        } else {
            alert("Please make sure new password matches!")
        }
    }
    if(newPassword1 == "" || newPassword2 == "" || newPassword2 != newPassword1){
        window.location.reload()
    }
}

const Profile = (props) => { //the profile page
    const [expanded, setExpanded] = React.useState(false); //determines if popup navbar should be opened

    const handleChange = (panel) => (event, isExpanded) => { 
      setExpanded(isExpanded ? panel : false);
    };

    // show password stuff
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
    const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

    const [oldPassword, setOldPassword] = React.useState("")
    const [newPassword1, setNewPassword1] = React.useState("")
    const [newPassword2, setNewPassword2] = React.useState("")
    const [newEmail, setNewEmail] = React.useState("")
    const [newUsername, setNewUsername] = React.useState("")

    if(localStorage.getItem('udata') != null){
        return(
            <ThemeProvider theme={maintheme} className="profile-page">        
            <CssBaseline /> 
                <div>
                    <Grid container justifyContent="center">
                        <Grid item md={7} direction = "column" >
                            <h6><br/></h6> {/**adds a space between navbar and profile accordian*/}
                            {/* the accordian */}
                            <div>
                                {/* username box */}
                                <Accordion sx={{mt: 3,backgroundColor:props.darkmode?"rgb(113, 111, 111)":"#e3eca4"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                                        <Typography sx={{color: 'text.secondary', width: '55%', flexShrink: 0 }}>
                                            Username
                                        </Typography>
                                        <Typography align="right" sx={{color: 'text.secondary' }}>{JSON.parse(localStorage.getItem('udata')).username}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
                                            <TextField size = "small" id="username-input" label="New Username" variant="outlined" value={newUsername} onChange={nu => setNewUsername(nu.target.value)}/>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                {/* email box */}
                                <Accordion sx={{backgroundColor:props.darkmode?"rgb(113, 111, 111)":"#e3eca4"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" >
                                        <Typography sx={{ color: 'text.secondary', width: '55%', flexShrink: 0 }}>
                                            Change Email
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}> {JSON.parse(localStorage.getItem('udata')).email}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                                            <TextField size = "small" id="new-email-input" label="New Email" variant="outlined" value={newEmail} onChange={ne => setNewEmail(ne.target.value)} />
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                {/**password box*/}
                                <Accordion sx={{backgroundColor:props.darkmode?"rgb(113, 111, 111)":"#e3eca4"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel4bh-header" >
                                        <Typography sx={{ color: 'text.secondary', width: '55%', flexShrink: 0 }}>
                                            Change Password
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            *********
                                        </Typography>
                                    </AccordionSummary >
                                    <AccordionDetails >
                                        <Typography> 
                                            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate  autoComplete="off" >
                                                <TextField variant="outlined" size = "small" id="new-password-input " label="New Password" type={showPassword ? "text" : "password"} value={newPassword1} onChange={np1 => setNewPassword1(np1.target.value)}
                                                    InputProps={{ // <-- This is where the toggle button is added.
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                {/* icon for show or hide password */}
                                                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} >
                                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <TextField variant="outlined" size = "small" id="confirm-password-input " label="Confirm New Password" type={showPassword ? "text" : "password"} value={newPassword2} onChange={np2 => setNewPassword2(np2.target.value)} />
                                            </Box>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            {/* outside field text for password verification */}
                            <Stack justifyContent="center" spacing={2} direction="row" sx={{mt: 5, mb:10}}>
                                <TextField size = "small" id="old-password-input " label="Old Password"  type={showPassword1 ? "text" : "password"} value={oldPassword} onChange={op => setOldPassword(op.target.value)}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton aria-label="toggle pass visibility" onClick={handleClickShowPassword1} onMouseDown={handleMouseDownPassword1} >
                                                    {showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <a justify="center" className="btn" onClick={() => updateCall(oldPassword, newPassword1, newPassword2, newEmail, newUsername)}>
                                    Submit{" "}
                                </a>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        );
    }
    else {
        return(
            <ThemeProvider theme={maintheme} className="profile-page">
                <div>Nothing to see here because you're not logged in!</div>
                <a href='/Login'>Login in here!</a>
            </ThemeProvider>
        )
    }
}

export default Profile;