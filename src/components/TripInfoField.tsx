import React from 'react';
import Box from '@mui/material/Box';

interface TripInfoField {
  children?: React.ReactNode;
}

const TripInfoField = ({ children }: TripInfoField) => {
  return (
    <Box component={'li'} sx={{ display: 'flex' }}>
      {children}
    </Box>
  );
};

export default TripInfoField;
