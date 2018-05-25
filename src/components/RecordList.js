import React from "react";

import { connect } from "react-redux";

import RecordItem from "./RecordItem";
import { removeRecord } from "../actions/opers";

const RecordList = props => (
  <div>
    {console.log(JSON.stringify(props))}
    {props.records.length === 0 ? (
      <p>No Record</p>
    ) : (
      <div>
        <div className="row">
          <div className="col s2">name</div>
          <div className="col s2">math</div>
          <div className="col s2">english</div>
          <div className="col s2">chinese</div>
          <div className="col s2">total</div>
        </div>
        {props.records.map(record => (
          <RecordItem
            {...record}
            key={record.id}
            remove={id => {
              props.dispatch(removeRecord(id));
            }}
          />
        ))}
      </div>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    records: state.oper
  };
};
export default connect(mapStateToProps)(RecordList);
