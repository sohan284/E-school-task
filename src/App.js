import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Pages/Home';

function App() {
  const [pokemons,setPokemon] = useState([])
  const [search,setSearch] = useState('')
  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(res=>res.json())
    .then(data=>setPokemon(data.results))
  },[])
 const handleSearch = event =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  
  setSearch(searchText);
  searchField.value = '';
 }
 console.log(search);

  return (
  <div className='container  mx-auto'>
  <div className='flex justify-center p-10'>
  <input id='search-field' type="text" placeholder="Search" name='search' class="input bg-white bottom-4  input-info w-full max-w-xs" />
  <button onClick={handleSearch} id='btn-search' className='btn text-white font-extrabold bg-info mx-1'>Search</button>
  </div>
     <div className='flex justify-center'>
     <div className="App grid lg:grid-cols-3 h-full grid-cols-1 md:grid-cols-2  gap-5">
     {
      pokemons.map(pokmon=> <Home pokmon={pokmon} search={search}></Home>)
     }
    </div>
     </div>
  </div>
  );
}

export default App;
