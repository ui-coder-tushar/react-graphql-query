import './App.css'
import { Character } from './Components/Character';
import { CharactersList } from './Components/CharactersList';
import  { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
       <Routes>
        <Route path="/charactersList/:id" element={<Character />} />
        <Route path="/charactersList" element={<CharactersList />} />
      </Routes>
      </>
  )
}

export default App
