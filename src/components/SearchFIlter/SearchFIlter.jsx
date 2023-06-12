import PropTypes from 'prop-types';

const SearchFilter = ({ search }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" onChange={search} />
    </label>
  );
};

SearchFilter.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchFilter;
