import React, { useState, useEffect } from 'react';
import Rajaus from './Okei';
import PersonsList from './PersonsList';
import FormList from './FormList';
import axios from 'axios';
import Notification from './Notification';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '565345254'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);

  const showNotification = (message, isError = false) => {
    setNotification({ message, isError });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const addPerson = (e) => {
    e.preventDefault();
  
  
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };
      const updatedPersons = [...persons, personObject];
      setPersons(updatedPersons);
      localStorage.setItem('persons', JSON.stringify(updatedPersons));
  
      setNewName('');
      setNewNumber('');

      showNotification(`${newName} lisätty`, false);
    }
  };
  
  useEffect(() => {
    const storedPersons = localStorage.getItem('persons');
    if (storedPersons) {
      setPersons(JSON.parse(storedPersons));
    }
  }, [])

  const deletePerson  = (id) => {
    if (window.confirm('Haluatko varmasti poistaa tämän yhteystiedon?')) {
      axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Virhe yhteystiedon poistamisessa:', error);
        });
    }
  };

  return (
    <div>
    
      <h2>Phonebook</h2>
      <Notification message={notification?.message} isError={notification?.isError} />
      <Rajaus newFilter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <FormList
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} newFilter={filter} onDelete={deletePerson}/>
    </div>
  );
}

export default App;