import React, { useContext, useState } from "react";
import Notecontext from "../context/notes/Notecontext";

export default function AddNote() {
  const context = useContext(Notecontext);
  const {CreateNote } = context; //Destrucring From Context

  const [Notes, setNotes] = useState({
    User:"",
    Title:"",
    Description:"",
    Tag:"",
    _id:"",
    Date:"",
    __v: ""
  })

  const onchange = (Event) => {
    setNotes({...Notes, [Event.target.name]:Event.target.value}); //Three Dot Operator/Spread Operator
  };

  const handle_add_note = (e) => {
    e.preventDefault(); //Preventing the page to load if load, the same note will appear because notes are hardcoded in variable there is no database that node would update
    CreateNote(Notes);
  };

  return (
    <form  className="container my-3">
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          className="form-control"
          id="Title"
          name="Title"
          placeholder="Enter Notes"
          onChange={onchange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Description">Description</label>
        <textarea
          className="form-control"
          id="Description"
          name="Description"
          rows="3"
          onChange={onchange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="Tag">Tag</label>
        <input
          type="text"
          className="form-control"
          id="Tag"
          name="Tag"
          placeholder="Tag"
          onChange={onchange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3"
        onClick={handle_add_note}
      >
        Add Note
      </button>

      
    </form>
  );
}
