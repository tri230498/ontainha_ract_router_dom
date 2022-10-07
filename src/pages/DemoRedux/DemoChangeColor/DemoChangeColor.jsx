//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

export class DemoChangeColor extends Component {


    changeColor = (color) => {
        const action = {
            type: "CHANGE_COLOR_CAR",
            imgCar: `./img/products/${color}-car.jpg`
        }
        this.props.dispatch(action)
    }




  render() {
    console.log(this.props.img);
    return (
      <div className="container">
        <h3 className="text-center">Bài tập chọn màu xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.props.img} alt="..." className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="btn text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                this.changeColor('red')
              }}
            >
              red
            </button>
            <button
              className="btn text-white ms-2"
              style={{ backgroundColor: "black" }}
              onClick={() => {
                this.changeColor('black')
              }}
            >
              black
            </button>
            <button className="btn  ms-2" style={{ backgroundColor: "#ccc" }} onClick={() => {
                this.changeColor('silver')
              }}>
              silver
            </button>
            <button className="btn ms-2" style={{ backgroundColor: "#eee" }} onClick={() => {
                this.changeColor('steel')
              }}>
              steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // state: rootReducer
  img: state.imgCart,
});

export default connect(mapStateToProps)(DemoChangeColor);

/*
    arrow function return về 1 object
    () => {
        return {

        }
    }
    Viết tắt: {
        return tương đương ()
        () => {}
    }



*/
