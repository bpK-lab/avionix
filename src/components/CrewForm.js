import React, { useState } from "react";

function CrewForm({ onAddCrew }) {
   const [name, setName] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      onAddCrew({ id: Date.now(), name, members: [] });
      setName("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Nom de l'équipage"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <button type="submit">Ajouter</button>
      </form>
   );
}

export default CrewForm;
