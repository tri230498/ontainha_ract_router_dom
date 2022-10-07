//rcc
import React, { Component } from "react";

export default class extends Component {
  render() {
    /**
        So sánh this.state và this.props:

        + state và props: điều là thuộc tính có sẵn của react class component.
        + state: làm nhiệm vụ quản lý các gia trị thay đổi trên giao diện.
        và có thể gán lại gia trị mới thông qua hàm setState().
        + props: làm nhiệm vụ nhận giá trị từ nơi sử dụng thẻ (component cha) truyền vào 
        và không được gán lại giá trị (readonly).

     */
    // Thực hiện chức năng truyền động giá trị thông qua props
    // Nhận giá trị từ component cha truyền vào component con lấy gia trị ra bằng this.props
    let { tenSP, gia } = this.props;
    return (
      <div className="card text-https://i.pravatar.cc/300white bg-dark">
        <img
          className="card-img-top"
          src="https://i.pravatar.cc/200"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title text-white">{tenSP}</h4>
          <p className="card-text text-white">{gia}</p>
        </div>
      </div>
    );
  }
}
