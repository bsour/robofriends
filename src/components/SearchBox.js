import React, { useEffect, useRef } from 'react';

const SearchBox = ({ onSearchChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
