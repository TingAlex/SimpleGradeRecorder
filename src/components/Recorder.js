import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import InputRecord from "./InputRecord";
import RecordList from "./RecordList";

import { connect } from "react-redux";
import { addRecord } from "../actions/opers";

const Recorder = props => (
  <div>
    <p>一定要输入所有数据，并且成绩最多只能有一位小数</p>
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
