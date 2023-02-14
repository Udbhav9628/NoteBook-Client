import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Notecontext from "../context/notes/Notecontext";

export default function Signup() {
  const context = useContext(Notecontext);
  const { ShowAlert, setAlert } = context;
  const [signup, setsignup] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  let History = useHistory();

  const Handle_Signup = async (Event) => {
    ShowAlert("Loading...", "primary");
    Event.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_ADDRESS}/createuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      }
    );
    setAlert(null);
    const Data = await response.json();
    if (Data.sucess) {
      //Save the authToken And redirect to '/' route
      // localStorage.setItem("Token", Data.Auth_Token);
      //Using History Hook
      History.push("/Login");
      ShowAlert("Account Created Sucessfully, You Can Login Now..", "success ");
    } else {
      ShowAlert(Data.Message, "danger");
    }
  };

  const onchange = (Event) => {
    setsignup({ ...signup, [Event.target.name]: Event.target.value });
  };

  return (
    <form className="container" onSubmit={Handle_Signup}>
      <h3>Create Your Account Here To Continue To NoteBook </h3>
      <div className="mb-3">
        <label htmlFor="sName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="sName"
          name="Name"
          onChange={onchange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sexampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="Email"
          id="sexampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onchange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="sexampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="sexampleInputPassword1"
          name="Password"
          onChange={onchange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
