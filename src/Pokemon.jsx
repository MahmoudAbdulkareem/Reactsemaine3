import { useEffect, useState } from "react";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokID, setPokID] = useState(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokID}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.error("Error fetching Pokémon:", error));
    }, [pokID]);

    return (
        <div>
            <input 
                type="number" 
                min="1"
                onChange={(e) => setPokID(e.target.value)} 
                value={pokID}
            />
            {pokemon && (
                <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
}

export default Pokemon;
