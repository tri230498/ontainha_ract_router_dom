//rcc
import React, { Component, PureComponent } from "react";
/*
    Purecomponent: là component không có lifecycle shouldComponentUpdate, 
    nó sẽ tự xử lý render lại khi props thay đổi 
    (đối với props là primitive value: number, string,boolean, undefined, null)
    Đối với reference value thì cần tạo biến địa chỉ mới (vùng nhớ mới) và clone dữ liệu ra = spread operator({...}, [...])

*/
export default class Child extends PureComponent {
  // Mặc định sẽ chạy hàm lifecycle

  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }
// Cách 1: Dùng shouldComponentUpdate linh hoạt render khi setState có liên quan
//   shouldComponentUpdate(newProps, newState) {
//     // State nunber(this.props.number) thay đổi thì return true, ngược lại return false
//     if (this.props.number !== newProps.number) {
//       return true;
//     }
//     console.log("shouldComponentUpdate child");
//     return false;
//   }


  render() {
    console.log("render child");
    let {product} = this.props
    return (
      <div className="bg-dark p-5 display-4 text-white mt-2 ">
        <h3>Number child: {this.props.number}</h3>
        Child component
        <h3>Product: {product.name} - like: {product.like}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }
}
