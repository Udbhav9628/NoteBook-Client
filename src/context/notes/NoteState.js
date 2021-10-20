import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const notes = [
    {
      _id: "616c58b49c83050bee5e369a",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 2",
      Description: "Abraham Description 2",
      Tag: "General",
      Date: "2021-10-17T17:09:08.540Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
    {
      _id: "616c58bb9c83050bee5e369c",
      User: "616c4a92c2eb5e37a7714b8c",
      Title: "Abraham Note 3",
      Description: "Abraham Description 3",
      Tag: "General",
      Date: "2021-10-17T17:09:15.203Z",
      __v: 0,
    },
  ];
  const [Notestate, setNotestate] = useState(notes)

  return (
    <Notecontext.Provider value={{Notestate, setNotestate}}>{props.children}</Notecontext.Provider>
  );
};

export default NoteState;
