import React from 'react';

const Rajaus= ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      Rajaa tulokset <input value={newFilter} onChange={handleFilterChange} />
    </div>
  );
};

export default Rajaus;