import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/serach-box/search-box.component'


function App() {
  const [monsters, setMonsters] = useState([]);
  const [serachField, setSerachField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users => {
      setMonsters(users);
    });
  });


  const handleChange = (e) => {
    setSerachField(e.target.value);
  }

  const filterMonsters =  monsters.filter(m => m.name.toLowerCase().includes(serachField.toLowerCase()));

  return(
    <div className="App">
      <h1>My base react project is Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={handleChange}
        />
      <CardList monsters={filterMonsters} />
  </div>
  );
}

export default App;
