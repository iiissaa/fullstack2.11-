import React from 'react';

const PersonsList = ({ persons, newFilter, onDelete }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter && newFilter.toLowerCase())
  );

  return (
    <div>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}
            <button onClick={() => onDelete(person.id)}>Poista</button>
            {/* ... */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonsList;
