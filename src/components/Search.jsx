const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </>
  );
};

export default Search