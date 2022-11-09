import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChangeNameFields from './ChangeNameFields';
import ChangeEmailFields from './ChangeEmailFields';
import ChangePasswordFields from './ChangePasswordFields';
import ChangeUsernameFields from './ChangeUsernameFields';

export default function ControlledAccordions() { //accordian expanding
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            <ChangeUsernameFields/>
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
            <ChangeEmailFields/>
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
            <ChangePasswordFields/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
