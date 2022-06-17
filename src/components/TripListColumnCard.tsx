import React from 'react';
import Paper from '@mui/material/Paper';

interface TripListColumnCardProps {
  children?: React.ReactNode;
}

const TripListColumnCard = ({ children }: TripListColumnCardProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1,
        minHeight: '200px',
        backgroundColor: (theme) => theme.palette.common.white,
      }}
    >
      {true && children}
    </Paper>
  );
};

export default TripListColumnCard;
