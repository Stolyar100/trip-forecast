import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Stack from '@mui/material/Stack';
import TripListHeader from '../../components/TripInfoColumn';
import { addDay } from '../../store/reducers/weather-action-creators';
import DayItem from '../DayItem';

interface TripBoardProps {}

const TripBoard = (props: TripBoardProps) => {
  const dispatch = useAppDispatch();
  const { tripDays } = useAppSelector((state) => state.weatherReducer);

  const addDayClickHendler: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    dispatch(addDay());
  };

  return (
    <>
      <Stack direction="row" spacing={0.5}>
        <TripListHeader addDayClickHandler={addDayClickHendler} />
        {tripDays.map((tripDay, tripDayIndex) => (
          <DayItem tripDayIndex={tripDayIndex} key={tripDayIndex} />
        ))}
      </Stack>
    </>
  );
};

export default TripBoard;
