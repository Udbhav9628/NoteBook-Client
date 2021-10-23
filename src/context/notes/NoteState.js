import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const [Notestate, setNotestate] = useState([]);
  const [Note, setNote] = useState([]); //For Updating the note

  //CRUD OF NOTES FUNCTIONS

  //CRUD - Create
  async function CreateNote(Notes) {
    const response = await fetch(`http://localhost:8000/CreateNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //means You must give object to body like here we are giving Notes object
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0YTkyYzJlYjVlMzdhNzcxNGI4YyIsImlhdCI6MTYzNDQ4Njk1M30.-mhUnSpexUYChBSE_7L7joYd6LJl49mGj7bh_0PFA28",
      },
      body: JSON.stringify(Notes), // converting Notes object into Json String format that's why Content type is  "application/json"
    });
    if (response.ok) {
      const note = await response.json(); // parses JSON response into native JavaScript objects
      //Displaying in Frontend
      setNotestate(Notestate.concat(note));
    }
  }

  //CRUD - Read/Fetch
  async function FetchNote() {
    const response = await fetch(`http://localhost:8000/FetchAllNotes`, {
      method: "GET",
      headers: {
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0YTkyYzJlYjVlMzdhNzcxNGI4YyIsImlhdCI6MTYzNDQ4Njk1M30.-mhUnSpexUYChBSE_7L7joYd6LJl49mGj7bh_0PFA28",
      },
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    setNotestate(note.notes);
  }
  //CRUD - Read/Fetch Specific id note
  async function FetchSpecificNote(id) {
    const response = await fetch(`http://localhost:8000/UpdateNotes/${id}`, {
      method: "GET",
      headers: {
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0YTkyYzJlYjVlMzdhNzcxNGI4YyIsImlhdCI6MTYzNDQ4Njk1M30.-mhUnSpexUYChBSE_7L7joYd6LJl49mGj7bh_0PFA28",
      },
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    setNote(note);
    // console.log(Note); //loging just last wala note because it is async function and log runs before the note update every time
  }

  //CRUD - Update
  const UpdateNote = async (id) => {};

  //CRUD - Delete
  const DeleteNote = async (id) => {
    const response = await fetch(`http://localhost:8000/DeleteNotes/${id}`, {
      method: "DELETE",
      headers: {
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0YTkyYzJlYjVlMzdhNzcxNGI4YyIsImlhdCI6MTYzNDQ4Njk1M30.-mhUnSpexUYChBSE_7L7joYd6LJl49mGj7bh_0PFA28",
      },
    });
    if (response.ok) {
      setNotestate(
        Notestate.filter((Element) => {
          return Element._id !== id;
        })
      );
    }
  };

  return (
    <Notecontext.Provider
      value={{ Notestate, CreateNote, FetchNote, FetchSpecificNote, UpdateNote, DeleteNote, Note, setNote }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
