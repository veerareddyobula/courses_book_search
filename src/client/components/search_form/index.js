import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AutoCompleteTextBox from '../auto_complete_text_box';

const SearchForm = (props) => {
  const [queryString, setQueryString] = React.useState('');
  const { submitHandler } = props;
  return (
    <div className="search-form">
      <AutoCompleteTextBox val={queryString} onChangeHandler={setQueryString} />
      <div>
        <button type="button" className="btn-primary" onClick={() => submitHandler(queryString)}>Submit</button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  submitHandler: PropTypes.func.isRequired
};

export default SearchForm;
