//rcc
/**
    1. Tổ chức sự kiện
    2. Nhúng Css
    3. State

 */
import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg",
    fSz: 16
  };

  // handleChangeColor = (color) => {
  //     this.setState({
  //         imgSrc: `./img/products/${color}-car.jpg`,
  //     })
  // }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập 1: Bài tập chọn màu xe</h3>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={this.state.imgSrc} alt="..." className="w-100" />
            </div>
            <div className="col-6">
              <button
                className="btn btn-danger m-2"
                onClick={() => {
                  // Thay đổi hình
                  this.setState({
                    imgSrc: "./img/products/red-car.jpg",
                  });
                }}
              >
                Red
              </button>
              <button
                className="btn btn-dark m-2"
                onClick={() => {
                  // Thay đổi hình
                  this.setState({
                    imgSrc: "./img/products/black-car.jpg",
                  });
                }}
              >
                black
              </button>
              <button
                className="btn btn-secondary m-2"
                onClick={() => {
                  // Thay đổi hình
                  this.setState({
                    imgSrc: "./img/products/silver-car.jpg",
                  });
                }}
              >
                silver
              </button>
              <button
                className="btn btn-light m-2 border"
                onClick={() => {
                  // Thay đổi hình
                  this.setState({
                    imgSrc: "./img/products/steel-car.jpg",
                  });
                }}
              >
                steel
              </button>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="text-center">Bài số 2: Tăng giảm fontSize</h3>
        <p style={{fontSize: this.state.fSz}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, et!
          Neque perspiciatis cupiditate quibusdam consequuntur doloribus atque
          tenetur aliquid mollitia magni quos quas, alias ad, libero, corrupti
          commodi eum adipisci.
        </p>
          <button className="btn btn-primary m-2" onClick={() => {
            this.setState({
                fSz: this.state.fSz + 1
            })
            console.log(this.state.fSz)
          }}>+</button>
          <button className="btn btn-primary m-2" onClick={() => {
            this.setState({
                fSz: this.state.fSz - 1
            })
            console.log(this.state.fSz)
          }}>-</button>
      </div>
    );
  }
}




