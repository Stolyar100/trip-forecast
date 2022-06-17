import React, { useState } from 'react';
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
import { addLocation } from '../../store/reducers/weather-action-creators';

interface SearchProps {}

const Search = (props: SearchProps) => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useAppDispatch();
  const { citySearchResult, isLoading, error, destinationDay, showSearch } =
    useAppSelector((state) => state.searchReducer);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    setSearchInput(value);
    const isEmpty = value.trim() === '';
    if (!isEmpty) {
      dispatch(fetchSearchCity(value));
    } else {
      dispatch(clearSearchResult());
    }
  };

  const onClickClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(hideSearch());
    setSearchInput('');
  };

  const onClickLocation = async (
    e: React.MouseEvent<HTMLDivElement>,
    location: IGeocodingIndexed
  ) => {
    await dispatch(addLocation({ dayIndex: destinationDay, location }));
    dispatch(hideSearch());
  };

  if (!showSearch) {
    return <>пошуку не буде</>;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <TextField
        sx={{ width: '100%' }}
        label={`Пошук локації для дня ${destinationDay + 1}`}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                aria-label="close"
                onClick={onClickClose}
              >
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={searchInput}
        onChange={onChange}
      />
      <nav aria-label="secondary mailbox folders">
        <List>
          {!error &&
            citySearchResult.map((city) => (
              <ListItem disablePadding key={city.id}>
                <ListItemButton onClick={(e) => onClickLocation(e, city)}>
                  <ListItemText
                    primary={`${city?.local_names?.uk || city.name}, ${
                      city.country
                    }`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </nav>
    </Box>
  );
};

export default Search;
