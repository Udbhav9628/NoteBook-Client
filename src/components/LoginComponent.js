import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Notecontext from "../context/notes/Notecontext";

export default function LoginComponent() {
  const context = useContext(Notecontext);
  const { setNotestate,ShowAlert } = context;
  const [Login, setLogin] = useState({
    Email: "",
    Password: "",
  });

  let History = useHistory();

  const onchange = (Event) => {
    setLogin({ ...Login, [Event.target.name]: Event.target.value });
  };

  const Handle_Login = async (Event) => {
    ShowAlert("Loading...", "primary");
    Event.preventDefault();
    const response = await fetch(`http://localhost:8000/Loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Login),
    });
    // setAlert(null)
    const Data = await response.json();
    if (Data.sucess) {
      setNotestate([])
      //Save the authToken And redirect to '/' route
      localStorage.setItem("Token", Data.Auth_Token);
      //Using History Hook
      History.push("/");
      ShowAlert("You are Logged in..", "success ");
    } else {
      ShowAlert(Data.Message, "danger");
    }
  };
  return (
    <div>
      <form className="container" onSubmit={Handle_Login}>
        <h3>Login To Continue To NoteBook </h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onchange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="Password"
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="container">
        <div className="flexbox">
        <h5>Did Not Have Account</h5>
        <Link className="btn btn-info mx-2" to="/SignUp">
          SignUp
        </Link>
        </div>
      </div>
    </div>
  );
}
