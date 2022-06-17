import React from 'react';
import Box from '@mui/material/Box';
import Search from '../Search';
import TripBoard from '../TripBoard';
import styles from './App.scss';

const App = () => {
  return (
    <Box>
      <Search />
      <TripBoard />
    </Box>
  );
};

export default App;
