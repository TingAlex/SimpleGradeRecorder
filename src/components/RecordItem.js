import React from "react";

const RecordItem = ({ name, math, english, chinese, total, id, remove }) => (
  <div className="row">
    <div className="col s2">{name}</div>
    <div className="col s2">{math}</div>
    <div className="col s2">{english}</div>
    <div className="col s2">{chinese}</div>
    <div className="col s2">{total}</div>
    <button className="btn waves-effect waves-light" onClick={e=>remove(id)}>
      remove
    </button>
  </div>
);

export default RecordItem;
