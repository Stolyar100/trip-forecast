import React from 'react';
import Paper from '@mui/material/Paper';

interface TripListColumnProps {
  children?: React.ReactNode;
}

const TripListColumn = ({ children }: TripListColumnProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        textAlign: 'center',
        p: 0.5,
        maxWidth: '240px',
        backgroundColor: (theme) => theme.palette.grey.A200,
      }}
    >
      {true && children}
    </Paper>
  );
};

export default TripListColumn;
