import React from 'react';
import Paper from '@mui/material/Paper';
import { height, maxHeight } from '@mui/system';
import { Height } from '@mui/icons-material';

interface TripListColumnCardProps {
  children?: React.ReactNode;
  maxHeight?: boolean;
}
const TripListColumnCard = ({
  children,
  maxHeight,
}: TripListColumnCardProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1,
        minHeight: '200px',
        backgroundColor: (theme) => theme.palette.common.white,
        height: () => (maxHeight ? '100%' : ''),
      }}
    >
      {true && children}
    </Paper>
  );
};

export default TripListColumnCard;
