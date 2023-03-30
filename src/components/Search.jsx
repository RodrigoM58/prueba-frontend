import logo from "../assets/images/logo.png"


const Search = ({ setData }) => {

    const searchPokemon = (event) => {
        const data = event.target.value
        setData(data)
    }

    return (
        <>
            <div className="searchContainer">
                <div>
                    <label className="labelSearch">Nombre del pokemon</label><br/>
                    <input type="search" className="inputSearch" onChange={searchPokemon} />
                </div>
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
            </div>
            
        </>
    )
}

export default Search;