import React from "react";
import Accordion from "react-bootstrap/Accordion";

import { useDispatch } from "react-redux";
import { removeFromTeam } from "../slices/teamSlice";
import {
  capitalizeFirstLetter,
  replaceTypeTextWithImage,
} from "../functions/globalFunctions";

function TeamPokemonCard({ pokemon, teamMemberId }) {
  const dispatch = useDispatch();

  // combine all the "weak against" into one array, depending on if the pokemon has 1 or 2 types
  let weakAgainstArray = [];
  if (pokemon.type_effectiveness.length > 1) {
    weakAgainstArray =
      pokemon.type_effectiveness[0].damage_relations.double_damage_from.concat(
        pokemon.type_effectiveness[1].damage_relations.double_damage_from,
        pokemon.type_effectiveness[0].damage_relations.half_damage_to,
        pokemon.type_effectiveness[1].damage_relations.half_damage_to,
        pokemon.type_effectiveness[0].damage_relations.no_damage_to,
        pokemon.type_effectiveness[1].damage_relations.no_damage_to
      );
  } else {
    weakAgainstArray =
      pokemon.type_effectiveness[0].damage_relations.double_damage_from.concat(
        pokemon.type_effectiveness[0].damage_relations.half_damage_to,
        pokemon.type_effectiveness[0].damage_relations.no_damage_to
      );
  }
  let uniqueWeakAgainstArray = [
    ...new Set(weakAgainstArray.map((item) => item.name)),
  ]; // get unique values from full weakness array

  let strongAgainstArray = [];
  if (pokemon.type_effectiveness.length > 1) {
    strongAgainstArray =
      pokemon.type_effectiveness[0].damage_relations.double_damage_to.concat(
        pokemon.type_effectiveness[1].damage_relations.double_damage_to,
        pokemon.type_effectiveness[0].damage_relations.half_damage_from,
        pokemon.type_effectiveness[1].damage_relations.half_damage_from,
        pokemon.type_effectiveness[0].damage_relations.no_damage_from,
        pokemon.type_effectiveness[1].damage_relations.no_damage_from
      );
  } else {
    strongAgainstArray =
      pokemon.type_effectiveness[0].damage_relations.double_damage_to.concat(
        pokemon.type_effectiveness[0].damage_relations.half_damage_from,
        pokemon.type_effectiveness[0].damage_relations.no_damage_from
      );
  }
  let uniqueStrongAgainstArray = [
    ...new Set(strongAgainstArray.map((item) => item.name)),
  ];

  return (
    <div className="animated animatedFadeInUp fadeInUp">
      <Accordion.Item eventKey={teamMemberId}>
        <Accordion.Header>
          <img
            className="team-accordion-image"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            height="70px"
          />
          <h3 className="team-accordion-name">
            {capitalizeFirstLetter(pokemon.name)}
          </h3>
          <div>
            {pokemon.types.map((type) => (
              <img
                src={replaceTypeTextWithImage(type.type.name)}
                key={type.type.name}
                width="30px"
              />
            ))}
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <p>Use {capitalizeFirstLetter(pokemon.name)} when fighting:</p>
                {uniqueWeakAgainstArray.map((damage) => (
                  <img
                    src={replaceTypeTextWithImage(damage)}
                    alt={damage.name}
                    width="50px"
                    className="single-type-center"
                  />
                ))}
              </div>
              </div>
              <div className="row">
              <div className="col-sm">
                <p>Be careful when fighting:</p>
                {uniqueStrongAgainstArray.map((damage) => (
                  <img
                    src={replaceTypeTextWithImage(damage)}
                    alt={damage.name}
                    width="50px"
                    className="single-type-center"
                  />
                ))}
              </div>
            </div>
          </div>

       

          <button
            className="text-center remove-from-team"
            onClick={() => dispatch(removeFromTeam(teamMemberId))}
          >
            Remove from team
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <br />
    </div>
  );
}

export default TeamPokemonCard;
