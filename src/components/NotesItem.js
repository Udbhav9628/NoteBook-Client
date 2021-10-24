import React, { useContext, useRef } from "react";
import Notecontext from "../context/notes/Notecontext";

export default function NotesItem(props) {
  const context = useContext(Notecontext);
  const { DeleteNote, UpdateNote, FetchSpecificNote, Note, setNote } = context;

  const onchange = (Event) => {
    setNote({ ...Note, [Event.target.name]: Event.target.value }); //Three Dot Operator/Spread Operator
  };

  const refclose = useRef(null)

  return (
    <div className="card text-dark bg-info mb-3">
      <div className="card-header">
        {props.Tag} | {new Date(props.Date).toGMTString()}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        <p className="card-text">{props.Description}</p>
      </div>
      <div className="button">
        <button
          type="button"
          className="btn btnEdit btn-primary fas fa-trash-alt"
          onClick={() => {
            DeleteNote(props.Id);
          }}
        ></button>
        <button
        type="button"
        className="btn btnEdit btn-primary fas fa-edit"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          FetchSpecificNote(props.Id);
        }}
      >
      </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="container my-3">
                <div className="form-group">
                  <label htmlFor="Title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    name="Title"
                    placeholder="Enter Notes"
                    value={Note.Title}
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
                    value={Note.Description}
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
                    value={Note.Tag}
                    onChange={onchange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
              ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={()=>{
                UpdateNote(Note._id,Note.Title,Note.Description,Note.Tag)
                refclose.current.click();
              }}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
