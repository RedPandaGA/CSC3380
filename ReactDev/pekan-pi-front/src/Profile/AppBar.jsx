import React from 'react';
import { Typography, AppBar, Toolbar} from '@mui/material';

export default function NavBar() { //navigation bar at the top
    return (
        <AppBar position = "relative">
        <Toolbar>
            <Typography variant = "h3">
                Profile
            </Typography>
        </Toolbar>
    </AppBar>
    );
}