/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const AutoCompleteTextBox = (props) => {
  const { val, onChangeHandler } = props;
  const [queries, setQueries] = React.useState([]);
  const [filteredQueries, setFilteredQueries] = React.useState([]);

  React.useEffect(() => {
    console.log('--== One Fetching queries all --==');
    fetch('/api/queries/all').then(response => response.json()).then((result) => {
      console.log('--== Fetching queries all --==');
      setQueries(result.data);
      setFilteredQueries(result.data);
    });
  }, []);

  React.useEffect(() => {
    console.log('--== React.useEffect::val ', val);
    const temp = queries.filter(item => item.includes(val) && item !== val);
    console.log('--== React.useEffect::val ', val, temp);
    setFilteredQueries(temp);
  }, [val]);

  const getKey = React.useCallback(index => Math.random() + new Date().getTime() + index);


  return (
    <div className="auto-complete">
      <input type="text" placeholder="Search books" value={val} onChange={event => onChangeHandler(event.target.value)} />
      {
            val && val.length > 0 && (
            <div>
              <ul>
                {
                    filteredQueries && filteredQueries.map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                      <li key={getKey(index)} onClick={() => onChangeHandler(item)}>{item}</li>
                    ))
                }
              </ul>
            </div>
            )
      }
    </div>
  );
};

AutoCompleteTextBox.propTypes = {
  val: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default AutoCompleteTextBox;
