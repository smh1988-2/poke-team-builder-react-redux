import React from "react";

import { useSelector } from "react-redux";

function MyTeam() {
  const team = useSelector((state) => state.team);
  console.log("team is: ", team);

  return (
    <div>
      <h1>My Team</h1>

      {team.length > 0 ? (
        <div>
            {team.map((pokemon) => <p>{pokemon.name}</p>)}

         {/* MAKE TEAM CARD */}
        </div>
      ) : null}

    </div>
  );
}

export default MyTeam;
