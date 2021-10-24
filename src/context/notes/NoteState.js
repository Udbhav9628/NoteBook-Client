import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const [Notestate, setNotestate] = useState([]);
  const [Note, setNote] = useState({
    Date: "",
    Description: "",
    Tag: "",
    Title: "",
    User: "",
    __v: 0,
    _id: "",
  }); //For Updating the note only

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
    //Fetch specific note from Notestate

    const note = Notestate.find((element) => element._id === id);
    setNote(note);
  }

  //CRUD - Update
  const UpdateNote = async (id, Title, Description, Tag) => {
    await fetch(`http://localhost:8000/UpdateNotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //means You must give object to body like here we are giving Notes object
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0YTkyYzJlYjVlMzdhNzcxNGI4YyIsImlhdCI6MTYzNDQ4Njk1M30.-mhUnSpexUYChBSE_7L7joYd6LJl49mGj7bh_0PFA28",
      },
      body: JSON.stringify({ Title, Description, Tag }), // converting Notes object into Json String (only format to transfer data over http) format that's why Content type is  "application/json and setting it to body so backend can access it by req.body"
    });
    FetchNote();
  };

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
      value={{
        Notestate,
        CreateNote,
        FetchNote,
        FetchSpecificNote,
        UpdateNote,
        DeleteNote,
        Note,
        setNote,
      }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
