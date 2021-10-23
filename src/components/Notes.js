import React, { useContext, useEffect } from "react";
import Notecontext from "../context/notes/Notecontext";
import NotesItem from "./NotesItem";

export default function Notes() {
  const context = useContext(Notecontext);
  const { Notestate, FetchNote } = context; //Destrucring From Context
  
  useEffect(() => {
    FetchNote();
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="row">
      {Notestate.map((elements) => {
        return (
          <div className="col-sm-6" key={elements._id}>
            <NotesItem
              Id={elements._id}
              Title={elements.Title}
              Description={elements.Description}
              Date={elements.Date}
              Tag={elements.Tag}
              User={elements.User}
            />
          </div>
        );
      })}
    </div>
  );
}
