//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "./Burger";

class Menu extends Component {
  renderMenu = () => {
    let { burger} = this.props.demoBurgerReducer;
    return burger.map((bg, index) => {
      return (
        <tr key={index}>
          <td>{bg.name}</td>
          <td>
            <button className="btn btn-primary me-2" onClick={() => {
                let action = {
                    type: "CHANGE_QUANTITY",
                    payload: {
                        name: bg.name,
                        quantity: 1
                    }
                }
                // Gửi action lên redux
                this.props.dispatch(action)
            }}>+</button>
            {bg.quantity}
            <button className="btn btn-primary ms-2" onClick={() => {
                let action = {
                    type: "CHANGE_QUANTITY",
                    payload: {
                        name: bg.name,
                        quantity: -1
                    }
                }
                // Gửi action lên redux
                this.props.dispatch(action)
            }}>-</button>
          </td>
          <td>{this.props.demoBurgerReducer.menu[bg.name]}</td>
        </tr>
      );
    });
  };

  render() {
    let { burger } = this.props.demoBurgerReducer;
    return (
      <div>
        <h3 className="text-center">Menu</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th className="ps-3">Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMenu()}
            {/* <tr>
              <td>salad</td>
              <td>
                <button className="btn btn-primary me-2">+</button>1
                <button className="btn btn-primary ms-2">-</button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <td>cheese</td>
              <td>
                <button className="btn btn-primary me-2">+</button>1
                <button className="btn btn-primary ms-2">-</button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <td>beef</td>
              <td>
                <button className="btn btn-primary me-2">+</button>1
                <button className="btn btn-primary ms-2">-</button>
              </td>
              <td>10</td>
            </tr> */}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} align="right">
                Thành tiền :
                {burger.reduce((tt, bg, index) => {
                  return tt + bg.quantity * 10;
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  demoBurgerReducer: state.demoBurgerReducer,
});

export default connect(mapStateToProps)(Menu);
