import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang = () => {
    let gioHang = this.props.gioHang;
    return gioHang.map((gh, index) => {
      console.log(gh);
      return (
        <tr key={index}>
          <td>{gh.maSP}</td>
          <td>
            <img src={gh.hinhAnh} alt={gh.tenSP} width={50} />
          </td>
          <td>{gh.tenSP}</td>
          <td>
            <button className="btn btn-primary mx-2" onClick={() => {
              const action = {
                type: "TANG_GIAM_SO_LUONG",
                payload: {
                  maSP : gh.maSP,
                  soLuong: 1
                }
              }
              // Gửi lên reducer
              this.props.dispatch(action)
            }}>+</button>
            {gh.soLuong}
            <button className="btn btn-primary mx-2" onClick={() => {
              const action = {
                type: "TANG_GIAM_SO_LUONG",
                payload: {
                  maSP : gh.maSP,
                  soLuong: -1
                }
              }
              // Gửi lên reducer
              this.props.dispatch(action)
            }}>-</button>
          </td>
          <td>{gh.giaBan.toLocaleString()}VND</td>
          <td>{(gh.soLuong * gh.giaBan).toLocaleString()}VND</td>
          <td>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                const action = {
                  type: "XOA_GIO_HANG",
                  payload: {
                    maSpClick: gh.maSP,
                  },
                };
                this.props.dispatch(action);
              }}
            >
              Xóa
            </button>
            <button className="btn btn-primary">Sửa</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th className="ps-4">Số lượng</th>
              <th>Giá bán</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.demoGioHangReducer.gioHang,
});

export default connect(mapStateToProps)(GioHang);
