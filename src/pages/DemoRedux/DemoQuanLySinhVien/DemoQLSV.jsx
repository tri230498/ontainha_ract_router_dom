//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

class DemoQLSV extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      sinhVien: {...this.props.qlsvReducer.sinhVien}
    }
    this.props.dispatch(action)
  };

  render() {
    let { arrSinhVien, sinhVien } = this.props.qlsvReducer;

    return (
      <div className="container">
        <ul>
          {/* <li>1- Nguyễn Văn A</li>
          <li>2- Nguyễn Văn B</li> */}
          {arrSinhVien.map((sv, index) => {
            // console.log(sv)
            return (
              <li key={index} type="none">
                {sv.id} - {sv.name}
              </li>
            );
          })}
        </ul>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">id</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={sinhVien.id}
              onChange={(e) => {
                const action = {
                  type: "HANDLE_CHANGE_INPUT",
                  id: e.target.id,
                  value: e.target.value,
                };
                // {type: "HANDLE_CHANGE_INPUT", id:'id', name:'123'}
                this.props.dispatch(action);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={sinhVien.name}
              onChange={(e) => {
                const action = {
                  type: "HANDLE_CHANGE_INPUT",
                  id: e.target.id,
                  value: e.target.value,
                };
                // {type: "HANDLE_CHANGE_INPUT", id:'id', name:'123'}
                this.props.dispatch(action);
              }}
            />
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-success">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducer: state.qlsvReducer,
});

export default connect(mapStateToProps)(DemoQLSV);
