import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack justifyContent="center" spacing={2} direction="row">
      <Button variant="contained" sx={{mt: 4}}>Submit</Button>
    </Stack>
  );
}