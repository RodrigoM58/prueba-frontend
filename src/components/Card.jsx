import { useEffect, useState } from "react";
import pokemon from '../services/pokemon.service';
import pokebola from '../assets/images/pokebola1.jpeg';
import cardup from '../assets/images/cardup.jpeg';
import carddown from '../assets/images/carddown.jpeg';

const Card = ({pokemonInfo}) => {

    const [infoCard, setInfoCard] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const infoPokemon = async() => {
            const response = await pokemon.getInfoPokemon(pokemonInfo.url);
            setInfoCard(response);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }

        infoPokemon();
    }, [pokemonInfo]);

    return (
        <>
            <div className="card animate__animated animate__fadeInUp">
                <img src={cardup} alt='card' />
                {
                    !loading ?
                    <>
                        <img src={infoCard?.sprites?.front_default} alt="pokemon"/>
                        
                        <div className="card-body">
                            <span>Nombre: {infoCard.name}</span><br/>
                            <span>Numero: {infoCard.id}</span>
                        </div>
                    </>
                    : <img src={pokebola} alt="pokemon"/>
                }
                <img src={carddown} alt='card' />
            </div>
        </>

    )
}
export default Card;