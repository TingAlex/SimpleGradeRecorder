import React from "react";
// import { connect } from "react-redux";

// import addRecord from "../actions/opers";

class InputRecord extends React.Component {
  state = {
    message: ""
  };
  handleAddRecord = e => {
    e.preventDefault();
    console.log(e.target.elements);
    const name = e.target.elements.name.value.trim();
    const math = e.target.elements.math.value.trim();
    const english = e.target.elements.english.value.trim();
    const chinese = e.target.elements.chinese.value.trim();
    const reg = /^\d{1,}(\.\d{0,1})?$/;
    if (
      math &&
      english &&
      chinese &&
      name &&
      math.match(reg) &&
      english.match(reg) &&
      chinese.match(reg)
    ) {
      console.log("match~");
      this.setState(() => ({
        message: ""
      }));
      e.target.elements.name.value = "";
      e.target.elements.math.value = "";
      e.target.elements.english.value = "";
      e.target.elements.chinese.value = "";
      const total =
        parseFloat(english, 10) +
        parseFloat(math, 10) +
        parseFloat(chinese, 10);
      const record = { name, math, english, chinese, total };
      this.props.onSubmit(record);
    } else {
      console.log("can't add this record");
      this.setState(() => ({
        message: "invalid"
      }));
    }
  };
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleAddRecord}>
          <div className="row">
            <div className="col s2">
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div className="col s2">
              <input type="text" placeholder="Math" name="math" />
            </div>
            <div className="col s2">
              <input type="text" placeholder="English" name="english" />
            </div>
            <div className="col s2">
              <input type="text" placeholder="Chinese" name="chinese" />
            </div>
            <div className="col s2">
              <button className="btn waves-effect waves-light">Submit</button>
            </div>
            <div className="col s2">
              <p className="red-text">{this.state.message}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputRecord;
