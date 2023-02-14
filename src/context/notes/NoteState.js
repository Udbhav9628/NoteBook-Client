import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const [Notestate, setNotestate] = useState([]);
  const [Alert, setAlert] = useState(null);
  const ShowAlert = (Message, type) => {
    setAlert({
      Msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
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
    const response = await fetch(
      `${process.env.REACT_APP_ADDRESS}/CreateNotes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //means You must give object to body like here we are giving Notes object
          authToken: localStorage.getItem("Token"),
        },
        body: JSON.stringify(Notes), // converting Notes object into Json String format that's why Content type is  "application/json"
      }
    );
    if (response.ok) {
      ShowAlert("Added Sucessfully", "primary");
      const note = await response.json(); // parses JSON response into native JavaScript objects
      //Displaying in Frontend
      setNotestate(Notestate.concat(note));
    }
  }

  //CRUD - Read/Fetch
  async function FetchNote() {
    ShowAlert("Loading...", "primary");
    const response = await fetch(
      `${process.env.REACT_APP_ADDRESS}/FetchAllNotes`,
      {
        method: "GET",
        headers: {
          authToken: localStorage.getItem("Token"),
        },
      }
    );
    setAlert(null);
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
    await fetch(`${process.env.REACT_APP_ADDRESS}/UpdateNotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //means You must give object to body like here we are giving Notes object
        authToken: localStorage.getItem("Token"),
      },
      body: JSON.stringify({ Title, Description, Tag }), // converting Notes object into Json String (only format to transfer data over http) format that's why Content type is  "application/json and setting it to body so backend can access it by req.body"
    });
    FetchNote();
  };

  //CRUD - Delete
  const DeleteNote = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_ADDRESS}/DeleteNotes/${id}`,
      {
        method: "DELETE",
        headers: {
          authToken: localStorage.getItem("Token"),
        },
      }
    );
    if (response.ok) {
      ShowAlert("Deleted Sucessfully", "primary");
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
        setNotestate,
        CreateNote,
        FetchNote,
        FetchSpecificNote,
        UpdateNote,
        DeleteNote,
        Note,
        setNote,
        Alert,
        ShowAlert,
        setAlert,
      }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
