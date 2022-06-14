import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  clearSearchResult,
  fetchSearchCity,
  hideSearch,
} from '../../store/reducers/search-action-creators';
import {
  Box,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { IGeocodingIndexed } from '../../types';
import {
  addDay,
  addLocation,
} from '../../store/reducers/weather-action-creators';

interface TripProps {}

const Trip = (props: TripProps) => {
  const dispatch = useAppDispatch();
  const { tripDays } = useAppSelector((state) => state.weatherReducer);

  return <></>;
};

export default Trip;
