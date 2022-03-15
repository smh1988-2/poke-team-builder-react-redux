import React from "react";
import TeamPokemonCard from "./TeamPokemonCard";
import Accordion from "react-bootstrap/Accordion";

import { useSelector } from "react-redux";

function MyTeam() {
  const team = useSelector((state) => state.team);
    //console.log("team is: ", team[0].type_effectiveness[0].damage_relations);

  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          
        {team.length > 0 ? (
        <div>
          {/* <h1>My Team</h1> */}
          <Accordion alwaysOpen>
            {team.map((teamMember) => {
              return (
                <div key={team.indexOf(teamMember)}>
                  <TeamPokemonCard
                    pokemon={teamMember}
                    teamMemberId={team.indexOf(teamMember)}
                  />
                </div>
              );
            })}
          </Accordion>
          <br />
        </div>
      ) : null}

        </div>
        <div className="col"></div>
      </div>
    </div>

      
    </div>
  );
}

export default MyTeam;
