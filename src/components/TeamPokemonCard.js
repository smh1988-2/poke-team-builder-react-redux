import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";

function TeamPokemonCard({ pokemon, eventKey }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const type1 = pokemon.types[0].type.name
  const type2 = pokemon.types[1].type.name
  
  console.log(type1, type2)

  const typeEffectiveness = useSelector(
    (state) => state.search.typeEffectiveness
  );
  console.log(typeEffectiveness);

  return (
    <div>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          <img
            className=""
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            height="100px"
          />
          {capitalizeFirstLetter(pokemon.name)}
        </Accordion.Header>
        <Accordion.Body>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}

          { Object.keys(typeEffectiveness).length ? "we have types" : "no types" }
          {/* {typeEffectiveness
            .filter((type) => type === pokemon.types.name)
            .map((type) => {
              console.log("matching type for team members? ", type);
            })} */}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default TeamPokemonCard;
