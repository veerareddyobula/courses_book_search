import React from 'react';
import SearchForm from '../components/search_form';

export default () => {
  const searchFormSubmitHandler = React.useCallback((params) => {
    console.log('--== Search Form Params ', params);
  });

  return (
    <>
      <h1>Search Books</h1>
      <SearchForm submitHandler={searchFormSubmitHandler} />
    </>
  );
};
