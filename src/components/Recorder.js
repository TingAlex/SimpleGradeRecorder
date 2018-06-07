import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import InputRecord from "./InputRecord";
import RecordList from "./RecordList";

import { connect } from "react-redux";
import {
  addRecord
} from "../actions/opers";
import { inFilters, outFilters, noFilters } from "../actions/filters"

const Recorder = props => (
  <div>
    <p>一定要输入所有数据，并且成绩最多只能有一位小数</p>
    <button
      className="btn waves-effect red"
      onClick={e => {
        props.dispatch(inFilters());
      }}
    >
      Selected
    </button>
    <button
      className="btn waves-effect green"
      onClick={e => {
        props.dispatch(outFilters());
      }}
    >
      un-Selected
    </button>
    <button
      className="btn waves-effect"
      onClick={e => {
        props.dispatch(noFilters());
      }}
    >
      All
    </button>

    <InputRecord
      onSubmit={record => {
        // console.log("get new record " + JSON.stringify(record));
        props.dispatch(addRecord(record));
      }}
    />
    <RecordList />
  </div>
);

const mapStateToProps = state => ({
  records: state.oper
});
export default connect(mapStateToProps)(Recorder);
