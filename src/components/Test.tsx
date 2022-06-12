import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  clearSearchResult,
  fetchSearchCity,
} from '../store/reducers/search-action-creators';

interface TestProps {}

const Test: FC<TestProps> = () => {
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useAppDispatch();
  const { citySearchResult, isLoading, error } = useAppSelector(
    (state) => state.searchReducer
  );

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

  return (
    <>
      <h1>Для тесту пошуку</h1>
      <input type="text" value={searchInput} onChange={onChange} />
      {error && <h2>Error: {error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!error &&
        citySearchResult.map((city) => (
          <h3 key={city.id}>
            {city.name}, {city.country}
          </h3>
        ))}
    </>
  );
};

export default Test;
