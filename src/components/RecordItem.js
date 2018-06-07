import React from "react";
class RecordItem extends React.Component {
  state = {
    color: null
  }
  componentWillMount() {
    this.setState(() => ({
      color: this.props.selected ? "btn btn-waves red" : "btn btn-waves green"
    }))
  }
  render() {
    return (
      <div className="row">
        <div className="col s1">
          <button
            className={this.state.color}
            onClick={e => {
              this.setState(() => ({
                color: this.props.selected ? "btn btn-waves green" : "btn btn-waves red"
              }))
              this.props.select(this.props.id);

            }}
          />
        </div>
        <div className="col s2">{this.props.name}</div>
        <div className="col s1">{this.props.math}</div>
        <div className="col s1">{this.props.english}</div>
        <div className="col s1">{this.props.chinese}</div>
        <div className="col s1">{this.props.total}</div>
        <button className="btn waves-effect waves-light" onClick={e => this.props.remove(this.props.id)}>
          remove
    </button>
      </div>
    )
  }
}
export default RecordItem;

// const RecordItem = ({
//   selected,
//   name,
//   math,
//   english,
//   chinese,
//   total,
//   id,
//   remove,
//   select
// }) => (
//     <div className="row">
//       <div className="col s1">
//         <button
//           className="btn btn-waves"
//           onClick={e => {
//             select(id);
//           }}
//         />
//       </div>
//       <div className="col s2">{name}</div>
//       <div className="col s1">{math}</div>
//       <div className="col s1">{english}</div>
//       <div className="col s1">{chinese}</div>
//       <div className="col s1">{total}</div>
//       <button className="btn waves-effect waves-light" onClick={e => remove(id)}>
//         remove
//     </button>
//     </div>
//   );

// export default RecordItem;

