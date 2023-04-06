const Search = ({ onSearch }) => (
  <>
    <label htmlFor="search">Search: </label>
    <input type="text" id="search" onChange={onSearch} />
  </>
);

export default Search