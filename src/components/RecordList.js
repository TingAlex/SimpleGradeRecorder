import React from "react";

import { connect } from "react-redux";

import RecordItem from "./RecordItem";
import { removeRecord, changeSelectedState } from "../actions/opers";
import { getVisibleRecords } from "../selectors/records"

const RecordList = props => (
  <div>
    {console.log(JSON.stringify(props))}
    {props.records.length === 0 ? (
      <p>No Record</p>
    ) : (
        <div>
          <div className="row">
            <div className="col s1"></div>
            <div className="col s2">name</div>
            <div className="col s1">math</div>
            <div className="col s1">english</div>
            <div className="col s1">chinese</div>
            <div className="col s1">total</div>
          </div>
          {props.records.map(record => (
            <RecordItem
              {...record}
              key={record.id}
              remove={id => {
                props.dispatch(removeRecord(id));
              }}
              select={id => {
                props.dispatch(changeSelectedState(id));
              }}
            />
          ))}
        </div>
      )}
  </div>
);

const mapStateToProps = state => {
  return {
    records: getVisibleRecords(state.oper, state.filt)
  };
};
export default connect(mapStateToProps)(RecordList);
