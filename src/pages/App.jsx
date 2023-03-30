import { useEffect, useState } from 'react';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';
import pokemon from '../services/pokemon.service';
import '../styles/app.css';


const App = () => {

    const [pokemones, setPokemones] = useState([])
    const [currentPokemon, setCurrentPokemon] = useState([])
    const [data, setData] = useState('')

    useEffect(() => {
        const getPokemon = async () => {
            const response = await pokemon.getAllPokemons();
            setPokemones(response.results)
            setCurrentPokemon(response.results)
        }

        getPokemon();
    }, []);

    
    useEffect(() => {
        if(data){
            let regex = new RegExp(data, 'i');

            let filtrado = currentPokemon.filter( filtrado => regex.test( filtrado.name ) || regex.test( filtrado.id) );
            setPokemones(filtrado)
        } else {
            setPokemones(currentPokemon)
        }
    }, [data]);

    return (
        <>
            <Search setData={setData}/>
            <Pokedex pokemones={pokemones} />
        </>
    )
}

export default App;