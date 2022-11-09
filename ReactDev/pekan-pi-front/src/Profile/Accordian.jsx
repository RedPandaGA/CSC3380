import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function ControlledAccordions() { //accordian expanding
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [oldPassword, setOldPassword] = React.useState("")
  const [newPassword1, setNewPassword1] = React.useState("")
  const [newPassword2, setNewPassword2] = React.useState("")
  const [newEmail, setNewEmail] = React.useState("")
  const [newUsername, setNewUsername] = React.useState("")

  return (

    <div>
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
            <TextField size = "small" id="outlined-basic" label="Username" variant="outlined" value={newUsername} onChange={nu => setNewUsername(nu.target.value)}/>
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
            <TextField size = "small" id="outlined-basic" label="New Email" variant="outlined" value={newEmail} onChange={ne => setNewEmail(ne.target.value)}/>
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
              <TextField size = "small" id="outlined-password-input " label="New Password" type="password" value={newPassword1} onChange={np1 => setNewPassword1(np1.target.value)}/>
              <TextField size = "small" id="outlined-password-input " label="Confirm New Password" type="password" value={newPassword2} onChange={np2 => setNewPassword2(np2.target.value)}/>
                  </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}