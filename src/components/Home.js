import React from "react";
import Notes from "./Notes";

export default function Home() {
  return (
    <div className="container my-3">
      <h3>Add Notes</h3>
      <form className="container my-3">
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            placeholder="Enter Notes"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <textarea
            className="form-control"
            id="Description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="Tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="Tag"
            placeholder="Tag"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
      <div className="container">
        <h3>Your Notes</h3>
        <Notes />
      </div>
    </div>
  );
}
