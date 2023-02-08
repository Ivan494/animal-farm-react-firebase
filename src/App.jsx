import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [animals,setAnimals]=useState([]);

  const search = async (q) =>
{
  const response = await fetch(
    'http://localhost:8080?'+ new URLSearchParams({q})
  );
  const data = await response.json();
  setAnimals(data);
}

  return (
    <main>
      <h1>Animal Farm</h1>

      <input type="text" placeholder="Search" onChange={search} />

      <ul>
        {animals.map((animal)=>(
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length ===0&& 'No animals found'}
      </ul>

    </main>
  )
}

function Animal({type,name,age}){
  return (
    <li>
      <strong>{type}</strong> {name} {age}
      </li>
  )
}

export default App
