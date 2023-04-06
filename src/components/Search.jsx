const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor="search">Search: </label>
    <input 
      type="text"
      id="search"
      value={search}
      onChange={onSearch} 
    />
  </>
);

export default Search