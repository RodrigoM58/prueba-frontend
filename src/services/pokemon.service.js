import axios from 'axios';

const pokemon = {

    async getAllPokemons() {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            return response.data;
        } catch(err) {
            return err;
        }
    },

    async getInfoPokemon( url ) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch(err) {
            return err;
        }
    }

}

export default pokemon;