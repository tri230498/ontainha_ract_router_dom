//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card">
        <img
          src={sp.hinhAnh}
          alt={sp.tenSP}
          className="w-100"
          style={{ height: 300, objectFit: "contain" }}
        />
        <div className="card-body">
          <h4>{sp.tenSP}</h4>
          <p>{sp.giaBan.toLocaleString()}VND</p>
          <button
            className="btn btn-success"
            onClick={() => {
              const action = {
                type: "THEM_GIO_HANG",
                payload: {
                  // payload: Tổng hợp các giá trị muốn gửi lên
                  sanPhamClick: sp,
                },
              };
              // this.props.dispatch => đưa dữ liệu lên
              this.props.dispatch(action);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});



export default connect(mapStateToProps)(SanPhamRedux);
