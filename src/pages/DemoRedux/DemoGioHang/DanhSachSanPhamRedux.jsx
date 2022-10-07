import React, { Component } from "react";
import { connect } from "react-redux";
import SanPhamRedux  from "./SanPhamRedux";

class DanhSachSanPhamRedux extends Component {

  renderSanPham = () => {
    let arrSanPham = this.props.arrSanPham;
    return arrSanPham.map((sp, index) => {
      return (
        <div className="col-4 mb-3" key={index}>
          <SanPhamRedux sp={sp} />
        </div>
      );
    });
  };

  render() {

    return (
      <div className="danh-sach-san-pham">
        <div className="container-fluid">
          <div className="row">
            {/* Cách 3: */}
            {/* <div className="col-4">
              <SanPhamRedux />
            </div>
            <div className="col-4">
              <SanPhamRedux />
            </div>
            <div className="col-4">
              <SanPhamRedux />
            </div> */}
            {/* Cách 2: */}
            {/* {arrSanPham.map((sp, index) => {
              return (
                <div className="col-4 mb-3" key={index}>
                  <SanPhamRedux sp={sp} />
                </div>
              );
            })} */}
            {/* Cách 3: */}
            {this.renderSanPham()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSanPham: state.demoGioHangReducer.arrSanPham,
});

export default connect(mapStateToProps)(DanhSachSanPhamRedux);
