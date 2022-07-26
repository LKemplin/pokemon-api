import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => {
                console.log(response.data.results);
                setPokemon(response.data.results);
            })
            .catch((err) => console.log(err))
    }, [])

  return (
    <div>
        <h1>Look at all these pokemon!</h1>
        {pokemon.length > 0 && pokemon.map((poke, index) => {
            return ( <div key={index}>{poke.name}</div> )
        })}
    </div>
  )
}

export default PokemonList;