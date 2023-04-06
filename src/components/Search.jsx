import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />

      <p>Searching for <strong>{searchTerm}</strong></p>
    </>
  );
};

export default Search