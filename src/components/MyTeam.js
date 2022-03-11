import React from "react";
import TeamPokemonCard from "./TeamPokemonCard";
import Accordion from "react-bootstrap/Accordion";

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
        </div>
      ) : null}
    </div>
  );
}

export default MyTeam;
