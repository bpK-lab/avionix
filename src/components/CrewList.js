import React from "react";

function CrewList({ crews, onRemoveCrew }) {
   return (
      <ul>
         {crews.map((crew) => (
            <li key={crew.id}>
               {crew.name}
               <button onClick={() => onRemoveCrew(crew.id)}>Supprimer</button>
            </li>
         ))}
      </ul>
   );
}

export default CrewList; 
