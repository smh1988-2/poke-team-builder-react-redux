import React from "react";
import TeamPokemonCard from "./TeamPokemonCard";
import Accordion from 'react-bootstrap/Accordion'

import { useSelector } from "react-redux";

function MyTeam() {
  const team = useSelector((state) => state.team);
//   console.log("team is: ", team);

  return (
    <div>
      <h1>My Team</h1>

      {team.length > 0 ? (
        <div>
          <Accordion alwaysOpen>
            
          {team.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <TeamPokemonCard pokemon={pokemon} eventKey={pokemon.id}/>
              </div>
            );
          })}
          </Accordion>
          

          {/* MAKE TEAM CARD */}
        </div>
      ) : null}
    </div>
  );
}

export default MyTeam;
