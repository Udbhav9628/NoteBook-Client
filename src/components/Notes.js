import React, { useContext, useEffect } from "react";
import Notecontext from "../context/notes/Notecontext";
import NotesItem from "./NotesItem";

export default function Notes() {
  const context = useContext(Notecontext);
  const { Notestate, setNotestate } = context;
  return (
    <div className="row">
      {Notestate.map((elements) => {
        return (
          <div className="col-sm-6" key={elements._id}>
            <NotesItem Title={elements.Title} Description={elements.Description} Date={elements.Date} Tag={elements.Tag}/>
          </div>
        );
      })}
    </div>
  );
}
