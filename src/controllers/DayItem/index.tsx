import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TripListColumn from '../../components/TripListColumn';
import TripListColumnCard from '../../components/TripListColumnCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { showSearch } from '../../store/reducers/search-action-creators';
import {
  deleteCity,
  deleteDay,
  deleteLocation,
} from '../../store/reducers/weather-action-creators';
import OwmService from '../../services/owm-service';
import TripInfoField from '../../components/TripInfoField';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface DayItemProps {
  tripDayIndex: number;
}

const DayItem = ({ tripDayIndex }: DayItemProps) => {
  const dispatch = useAppDispatch();
  const [selectedLocation, setSelectedLocation] = useState('');
  const tripDay = useAppSelector(
    (state) => state.weatherReducer.tripDays[tripDayIndex]
  );
  const cities = useAppSelector((state) => state.weatherReducer.cities);
  const selectedCityWeather = cities[selectedLocation]?.weather;

  const handleLocationSelect = (e: SelectChangeEvent) => {
    setSelectedLocation(e.target.value);
  };

  const handleAddButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(showSearch(tripDayIndex));
  };

  const handleDeleteButton: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    if (tripDay.cityIds.length === 0) {
      return await dispatch(deleteDay(tripDayIndex));
    }
    await dispatch(
      deleteLocation({ cityId: selectedLocation, dayIndex: tripDayIndex })
    );
    await dispatch(deleteCity(selectedLocation));
  };

  return (
    <TripListColumn>
      <Stack spacing={0.5}>
        <TripListColumnCard>
          <Typography
            sx={{
              textAlign: 'center',
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            ???????? ???{tripDayIndex + 1}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">??????????????</InputLabel>
            <Select
              labelId="select-location"
              id="select-location"
              value={selectedLocation}
              onChange={handleLocationSelect}
              label="??????????????"
              autoWidth
              sx={{ width: '100%' }}
            >
              {tripDay.cityIds.map((cityId) => (
                <MenuItem value={cityId} key={cityId}>
                  {cities[cityId].local_names?.uk || cities[cityId].name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack direction={'row'} spacing={3} justifyContent={'center'}>
            <IconButton aria-label="add location" onClick={handleAddButton}>
              <AddCircleOutlineIcon />
            </IconButton>
            <IconButton
              aria-label="delete location"
              onClick={handleDeleteButton}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
          {selectedCityWeather?.daily && (
            <Stack
              direction={'row'}
              spacing={1}
              alignItems={'center'}
              sx={{ m: 1 }}
            >
              <Avatar
                sx={{ width: '56px' }}
                alt={
                  selectedCityWeather.daily?.[tripDayIndex]?.weather?.[0]
                    .description
                }
                src={OwmService.getIconUrl(
                  selectedCityWeather.daily?.[tripDayIndex]?.weather?.[0]
                    .icon as string
                )}
              />
              <Stack spacing={1}>
                <Typography variant="body2">
                  ??????.:{selectedCityWeather?.daily?.[tripDayIndex]?.temp.min}
                  &deg;
                </Typography>
                <Typography variant="body2">
                  ????????.:{selectedCityWeather?.daily?.[tripDayIndex]?.temp.max}
                  &deg;
                </Typography>
              </Stack>
            </Stack>
          )}
        </TripListColumnCard>
        <TripListColumnCard maxHeight>
          {selectedCityWeather?.daily ? (
            <Stack
              component={'ul'}
              spacing={1}
              divider={<Divider sx={{ width: '100%' }} />}
              sx={{
                width: '100%',
                p: 0,
                marginBottom: 0,
                alignItems: 'center',
              }}
            >
              <Box>
                <Grid container rowSpacing={1}>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.65rem',
                      }}
                    >
                      ??????????
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.65rem',
                      }}
                    >
                      ????????
                    </Typography>
                  </Grid>
                  <Grid item xs={3} columnSpacing={4}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.65rem',
                      }}
                    >
                      ??????????
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.65rem',
                      }}
                    >
                      ??????
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {selectedCityWeather?.daily?.[tripDayIndex]?.temp.morn}
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {selectedCityWeather?.daily?.[tripDayIndex]?.temp.day}
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {selectedCityWeather?.daily?.[tripDayIndex]?.temp.eve}
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {selectedCityWeather?.daily?.[tripDayIndex]?.temp.night}
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {
                        selectedCityWeather?.daily?.[tripDayIndex]?.feels_like
                          .morn
                      }
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {
                        selectedCityWeather?.daily?.[tripDayIndex]?.feels_like
                          .day
                      }
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.7rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {
                        selectedCityWeather?.daily?.[tripDayIndex]?.feels_like
                          .eve
                      }
                      &deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant={'body2'}
                      sx={{
                        fontSize: '0.75rem',
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      {
                        selectedCityWeather?.daily?.[tripDayIndex]?.feels_like
                          .night
                      }
                      &deg;
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].pressure} ??????
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].humidity} %
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].wind_speed} ??/??????.
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].pop} %
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].rain || '-'} ????.
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].snow || '-'} ????.
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {selectedCityWeather.daily[tripDayIndex].uvi} ??????.
                </Typography>
              </TripInfoField>
            </Stack>
          ) : (
            <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
              ?????????? ??????????
            </Typography>
          )}
        </TripListColumnCard>
      </Stack>
    </TripListColumn>
  );
};

export default DayItem;
