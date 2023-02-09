import React, { useEffect, useState } from 'react';
import NotesList from './NotesList/NotesList';
import { nanoid } from 'nanoid';
import './App.css';
import Search from './Search/Search';
import Header from './Header/Header';

const App =() => {
const REACT_APP_DATA = 'react-notes-app-data';
 
const [notes, setNotes] = useState(JSON.parse(localStorage.getItem(REACT_APP_DATA)) || []);
const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

const addNote = (text) =>{
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) =>{
   const newNotes =  notes.filter((note) => note.id !== id);
   setNotes(newNotes);
}

useEffect(() => {
  localStorage.setItem(REACT_APP_DATA, JSON.stringify(notes));
}, [notes]);


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header value="Notes" handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote} />
    </div>
    </div>
  );
}

export default App;
