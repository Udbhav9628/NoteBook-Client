import React, { useContext, useEffect } from "react";
import Notecontext from "../context/notes/Notecontext";
import { useHistory } from "react-router-dom";
import NotesItem from "./NotesItem";

export default function Notes() {
  let History = useHistory();
  const context = useContext(Notecontext);
  const { Notestate, FetchNote, ShowAlert } = context; //Destrucring From Context

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      FetchNote();
    }else{
      ShowAlert("Login First Please..","success ")
      History.push("/Login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h3>Your Notes</h3>
      <div className="row">
        {Notestate.length === 0 ? (
          <h5>No Notes To Show</h5>
        ) : (
          Notestate.map((elements) => {
            return (
              <div className="col-sm-6" key={elements._id}>
                <NotesItem
                  Id={elements._id}
                  Title={elements.Title}
                  Description={elements.Description}
                  Date={elements.Date}
                  Tag={elements.Tag}
                  // User={elements.User}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
