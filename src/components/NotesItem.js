import React from "react";

export default function NotesItem(props) {
  return (
    <div className="card text-dark bg-info mb-3">
      <div className="card-header">{props.Tag}</div>
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        <p className="card-text">{props.Description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, ex qui. Aspernatur corporis quasi consequatur tempore nam nulla quibusdam voluptatibus doloribus aperiam, blanditiis hic labore quo et molestias, velit modi. </p>
      </div>
      <div class="card-footer bg-transparent border-success">{new Date(props.Date).toGMTString()}</div>
    </div>
  );
}
