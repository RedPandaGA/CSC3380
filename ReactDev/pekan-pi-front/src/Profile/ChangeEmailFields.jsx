import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField size = "small" id="outlined-password-input " label="Password" type="password"/>
      <TextField size = "small" id="outlined-basic" label="New Email" variant="outlined" />
    </Box>
  );
}