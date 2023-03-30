import Card from "./Card";


const Pokedex = ({pokemones}) => {
    
    return (
        <>
            <div className="containerCards">
                <div className="row">
                    {
                        (pokemones || []).map(res =>
                                <div className="col-3">
                                    <Card pokemonInfo={res}/>
                                </div>
                        )
                    }   
                </div>
            </div>
        </>
    )
}

export default Pokedex;