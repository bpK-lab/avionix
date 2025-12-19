import React, { useState }from "react";
import CrewForm from "./CrewForm";
import CrewList from "./CrewList";

function CrewManager() {
   const [crews, setCrews] = useState([]);

   const onAddCrew = (crew) => setCrews([...crews, crew]);
   const onRemoveCrew = (id) => setCrews(crews.filter(c => c.id !== id));

   return (
      <div>
         <CrewForm onAddCrew={onAddCrew} />
         <CrewList crews={crews} onRemoveCrew={onRemoveCrew} />
      </div>
   );
}

export default CrewManager;
