//rcc
// {} => Đây là dấu Databinding
import React, { Component } from "react";

export default class Databiding extends Component {
  // Phương thức render()

  userName = "Tri@gmail.com";

  showInfo() {
    return "Hello cybersoft";
  }

  renderImage = () => {
    return (
      <div>
        userName: {this.userName}
        <img src="https://i.pravatar.cc/300" alt="..." />
      </div>
    );
  };

  render() {
    // Biến và hàm thì khi khai báo có var let const
    const hoTen = "Trí Nguyễn";
    const tinhDiemTrungBinh = (diemToan, diemVan) => {
      return (diemToan + diemVan) / 2;
    };

    return (
      // Đưa dữ liệu từ js lên giao diện bằng cơ chế data binding = {}
      <div>
        Databiding
        <p id="hoTen">Họ tên: {hoTen}</p>
        <p>Điểm trung bình: {tinhDiemTrungBinh(2, 8)}</p>
        <hr />
        <p>{this.showInfo()}</p>
        <div>{this.renderImage()}</div>
      </div>
    );
  }
}
