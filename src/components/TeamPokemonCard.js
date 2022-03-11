import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from "react-redux";
import { removeFromTeam } from "../slices/teamSlice";

function TeamPokemonCard({ pokemon, teamMemberId }) {
  const typeEffectiveness = useSelector(
    (state) => state.search.typeEffectiveness
  );
  const dispatch = useDispatch();
 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <Accordion.Item eventKey={teamMemberId}>
        <Accordion.Header>
          <img
            className=""
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            height="100px"
          />
          <h3>{capitalizeFirstLetter(pokemon.name)}</h3>{" "}
        </Accordion.Header>
        <Accordion.Body>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
          <Button onClick={() => dispatch(removeFromTeam(teamMemberId))}>REMOVE</Button>

        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default TeamPokemonCard;
